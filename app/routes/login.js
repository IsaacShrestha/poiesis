import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    login(){
      const user = this.get('username');
      //const pass = this.get('password');
      this.get('store').query('kids', {orderBy:'username', equalTo: user }).then(function(users){
        return users.get('firstObject');
      }).then(function(users){

        alert(users.get('password'));
      });

    }
  }
});
