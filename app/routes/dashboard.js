import Ember from 'ember';

export default Ember.Route.extend({
    
    beforeModel: function(){
        if(!this.get('session.isAuthenticated')){
          this.transitionTo('login');
        }
        //alert(this.get('session'));
        console.log(this.get('session'));
      }

});
