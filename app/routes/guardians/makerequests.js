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
            if (rec.get('role')!='guardians'){
                alert('Cannot access this page!');
                _this.transitionTo(rec.get('role'));
            }
            else{
                _this.get('store').findRecord('guardian', id).then(function(rec){},function(err){
                    alert('Create a profile first!!!');
                    _this.transitionTo('guardians.profile');
                });
            }
        }); 
    },
    actions:{
        requestride(){
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let controller = this.get('controller');
            let date = controller.get('date');
            moment(date).format("dd/mm/yy");
            let time = controller.get('time');
            let pickup = controller.get('pickup');
            let dropoff = controller.get('dropoff');
            let status = 'pending';
            let acceptedBy = 'null';
            let token = 'null';
            let requestedBy= id;
            let _this = this;

            let gProfile = this.get('store').findRecord('guardian', id).then(function(record){
            
                let requestedFor = record.get('kidEmails');
                let newRequest = _this.get('store').createRecord('request', {
                    date: date,
                    time: time,
                    pickup: pickup,
                    dropoff: dropoff,
                    requestedBy: requestedBy,
                    acceptedBy: acceptedBy,
                    status: status,
                    token: token,
                    requestedFor: requestedFor
                });
                newRequest.save().then(function(){
                    alert("Request created!!");
                }, function(){
                    alert("Error!!! cannot create request.");
                });
          });
        }
    }
});
