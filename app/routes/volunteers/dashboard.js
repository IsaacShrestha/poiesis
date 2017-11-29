import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    beforeModel(){
        if(!this.get('session.isAuthenticated')){
            this.transitionTo('login');
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
                return records.get('acceptedBy')===id;
            });
        });
        return this.store.findAll('request');
    },
    actions:{
        cancelRequest(requstedRide){
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let rideId = requstedRide.get('id');
            this.get('store').findRecord('request', rideId).then(function(record){
                record.set('acceptedBy', 'null');
                record.set('status', 'pending');
                record.save();
            }, function(){alert("Error!!!")});
        },
        completeRide(requstedRide){
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let rideId = requstedRide.get('id');
            let controller = this.get('controller');
            let token = controller.get('token');
            this.get('store').findRecord('request', rideId).then(function(record){
                if (record.get('token')==token){
                    record.set('status', 'completed');
                    record.save();
                }
                else{
                    alert("Invalid Token!!!");
                    throw new Error("invalidToken");
                }
            });
        }
    }
});
