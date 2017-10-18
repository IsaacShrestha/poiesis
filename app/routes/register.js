import Ember from 'ember';

export default Ember.Route.extend({
    beforemodel: function(){},
    firebaseApp: Ember.inject.service(),
    actions:{
        signup(){
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            let role = controller.get('value');
            let ref = this.get('firebaseApp').auth();
            alert(role);
            ref.createUserWithEmailAndPassword(email, password).then(function(user){
                this.replaceWith('login');
                alert('lol');
              }, function(error){
                alert(error);
            }).bind(this);
            
        }
    }
});
