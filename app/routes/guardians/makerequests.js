import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    
    actions:{
        requestride(){
            
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;

            let controller = this.get('controller');
            let date = controller.get('date');
            let time = controller.get('time');
            let pickup = controller.get('pickup');
            let dropoff = controller.get('dropoff');
            let status = 'new';
            let requestedBy= id;
            
        }
    }
});
