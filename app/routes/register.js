import Ember from 'ember';

export default Ember.Route.extend({
    beforemodel: function(){},
    firebaseApp: Ember.inject.service(),
    actions:{
        signup(){
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            let role = controller.get('currentValue');
            let ref = this.get('firebaseApp').auth();
            var _this = this;
            ref.createUserWithEmailAndPassword(email, password).then(function(user){
                
                _this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                  }).then(function(registeredUser){
                      let insertUser = _this.store.createRecord('user',{
                          id: registeredUser.uid,
                          email: email,
                          role: role
                      });
                      insertUser.save().then(function(){
                        _this.transitionTo('dashboard');                        
                      })           
                    })
              }, function(error){
                alert(error);
            });          
        }
    }
});
