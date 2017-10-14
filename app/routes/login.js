import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    login(){
       let controller = this.get('controller');
       let user = controller.get('username');
       let password = controller.get('password');

       this.get('session').open('firebase', {
          provider: 'password',
          email: user,
          password: password
        }).then(function() {
          this.transitionTo('kids');
        }.bind(this));
       alert(user);
    }
  }
});
