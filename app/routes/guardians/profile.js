import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),

    model() {
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        let email = this.set('loginEmail', user.email);
        return this.get('store').findRecord('guardian', id).then(function(userProfile){
          return userProfile;
        },function(){
          return null;
        });
    },
    actions:{
        updateprofile(){
            let controller = this.get('controller');
            let email = controller.get('email');
            let password = controller.get('password');
            let name = controller.get('name');
            let address = controller.get('address');
            let phone = controller.get('phone');
            let kidemail = controller.get('kidemail');
            let _this = this;

            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            this.get('store').findRecord('guardian', id).then(function(record){
                record.set('name', name);
                record.set('address', address);
                record.set('phone', phone);
                record.set('kidEmails', kidemail);
                record.save();
            }, function(){
                let newProfile = _this.get('store').createRecord('guardian', {
                    id: id,
                    name: name,
                    address: address,
                    phone: phone,
                    kidEmails: kidemail
                });
                newProfile.save().then(function(){
                    alert("Profile created!!");
                })
            });
            user.updatePassword(password).then(function(){
                alert('Profile Updated!!');
            });
        }
    }
});
