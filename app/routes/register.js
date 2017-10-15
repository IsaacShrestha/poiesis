import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    actions:{
        signup(){
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            
            let ref = this.get('firebaseApp').auth();
            
            ref.createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          alert.log(error);
        });
        }
    }
});
