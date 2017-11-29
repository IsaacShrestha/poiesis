import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    
    beforeModel: function(){
        let that = this;
        if(!this.get('session.isAuthenticated')){
            that.transitionTo('login');
        }   
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        let _this = this;
        this.get('store').findRecord('user', id).then(function(rec){
            if (rec.get('role')!='volunteers'){
                alert('Cannot access this page!');
                _this.transitionTo(rec.get('role'));
            }
            else{
                _this.get('store').findRecord('volunteer', id).then(function(rec){},function(err){
                    alert('Create a profile first!!!');
                    _this.transitionTo('volunteers.profile');
                });
            }
        });     
    },
    model(){
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        let _this = this;
        return this.store.findAll('request').then(function(){
            return _this.store.filter('request', function(records){
                return records.get('requestedBy')===id;
            });
        });
        // return this.store.query('request', {
        //     filter:{
        //         requestedBy: 'lol'
        //     }
        // });
    },
    actions:{
        cancelRequest(requstedRide){
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let rideId = requstedRide.get('id');
            this.get('store').findRecord('request', rideId).then(function(record){
                record.destroyRecord();
            }, function(){alert("Error!!! Cannot delete request.")});
        }
    }
        
});
