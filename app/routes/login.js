import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  beforeModel: function(){
    if(this.get('session.isAuthenticated')){
      this.transitionTo('dashboard');
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
              let role = userValue.get('role');
              _this.transitionTo('dashboard');
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
