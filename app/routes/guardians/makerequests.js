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
            let status = 'pending';
            let acceptedBy = 'null';
            let requestedBy= id;
            let _this = this;
            // this.get('store').query('request', {
            //     filter: {
            //       requestedBy: id
            //     }
            // }).then(function(record){
            //     console.log(record.get('time')),
            //     record.set('date', date);
            //     record.set('time', time);
            //     record.set('pickup', pickup);
            //     record.set('dropoff', dropoff);
            //     record.set('requestedBy', requestedBy);
            //     record.set('status', status);
            //     record.save();
            // }, function(){
            //     let newRequest = _this.get('store').createRecord('request', {
            //         date: date,
            //         time: time,
            //         pickup: pickup,
            //         dropoff: dropoff,
            //         requestedBy: requestedBy,
            //         status: status
            //     });
            //     newRequest.save().then(function(){
            //         alert("Request created!!");
            //     })
            // });
            let newRequest = _this.get('store').createRecord('request', {
                date: date,
                time: time,
                pickup: pickup,
                dropoff: dropoff,
                requestedBy: requestedBy,
                acceptedBy: acceptedBy,
                status: status
            });
            newRequest.save().then(function(){
                alert("Request created!!");
            });
        }
    }
});
