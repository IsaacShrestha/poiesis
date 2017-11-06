import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),    
    actions:{
        logout(){
            let _this = this;    
            let ref = this.get('firebaseApp').auth();        
            this.get('session').close().then(function() {
                ref.signOut().then(function(){
                    _this.transitionTo('login');
                })        
            }); 
        }
      }
});
