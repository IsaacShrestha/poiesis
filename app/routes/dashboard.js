import Ember from 'ember';

export default Ember.Route.extend({
    
    beforeModel: function(){
        if(!this.get('session.isAuthenticated')){
          this.transitionTo('login');
        }
        let x = this.get('session.data.currentUser');
        alert(x);
      }

});
