import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    
    model() {
        let id = '-KxfbKOD22VI4YG9NLqP';
        return this.get('store').findRecord('guardian', id);
        
    },
    actions:{
        
        updateprofile(){
            let id = '-KxfbKOD22VI4YG9NLqP';
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            let name = controller.get('name');
            let address = controller.get('address');
            let phone = controller.get('phone');
            let kidemail = controller.get('kidemail');

            let user = this.get('firebaseApp').auth().currentUser;
            this.get('store').findRecord('guardian', id).then(function(record){

                record.set('name', name);
                record.set('address', address);
                record.set('phone', phone);
                record.set('kidEmails', kidemail);
                record.save();
            });
            user.updatePassword(password).then(function(){
                alert('Profile Updated!!');
            });

        }
    }
    
});
