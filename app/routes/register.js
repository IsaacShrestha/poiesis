import Ember from 'ember';

export default Ember.Route.extend({
    beforemodel: function(){},
    firebaseApp: Ember.inject.service(),
    actions:{
        signup(){
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            let role = 'kids';
            let ref = this.get('firebaseApp').auth();
            ref.createUserWithEmailAndPassword(email, password).then(function(user){
                
                this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                  }).then(function(){                
                      this.transitionTo(role+'.newprofile');
                    }.bind(this))
              }.bind(this), function(error){
                alert(error);
            }.bind(this));          
        },
        selectRole(value){
            this.set('currentValue', value);
        }
    }
});
