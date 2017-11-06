import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    
    beforeModel: function(){
        if(!this.get('session.isAuthenticated')){
        this.transitionTo('login');
        }     
    },
    model(){
    let user = this.get('firebaseApp').auth().currentUser;
    let id = user.uid;
    return this.get('store').query('request', {
        filter:{
            requestedBy: id
        }
    });
    }
        
});
