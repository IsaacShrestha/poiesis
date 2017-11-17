import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  beforeModel: function(){
    let _this = this;
    if(this.get('session.isAuthenticated')){
      let role = _this.get('session.currentUser.role');
      _this.transitionTo(role+'.dashboard');
    }
  },

  actions:{
    login(){
       let controller = this.get('controller');
       let user = controller.get('username');
       let password = controller.get('password');
       let _this = this;
       this.get('session').open('firebase', {
          provider: 'password',
          email: user,
          password: password
        }).then(function(userLogin) {
          _this.get('store').findRecord('user', userLogin.uid).then(function(userValue){
              _this.set('session.currentUser.role', userValue.get('role'));
              _this.transitionTo(userValue.get('role')+'.dashboard');
          })        
        });
      // let ref = this.get('firebaseApp').auth();      
      // ref.signInWithEmailAndPassword(user, password).then(function(loginUser){
      //   alert(loginUser.uid);
      //   _this.transitionTo('dashboard');
      // });
    }
  }
  
});
