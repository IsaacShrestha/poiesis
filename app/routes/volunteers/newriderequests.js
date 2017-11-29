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
        let _this = this;
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        return this.store.findAll('request').then(function(){
            return _this.store.filter('request', function(records){
                return records.get('status')==='pending' && records.get('requestedBy')!=id;
            });
        });
    },
    actions:{
        acceptRequest(requstedRide){
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let rideId = requstedRide.get('id');
            let token = Math.floor(Math.random()*10000);
            this.get('store').findRecord('request', rideId).then(function(record){
                record.set('acceptedBy', id);
                record.set('status', 'confirmed');
                record.set('token', token);
                record.save();
            }, function(){alert("Error!!!")});
        }
    }
});
