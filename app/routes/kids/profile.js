import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    beforeModel: function(){
        if(!this.get('session.isAuthenticated')){
        this.transitionTo('login');
        }             
    },
    model() {
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        return this.get('store').findRecord('kids', id).then(function(userProfile){
          return userProfile;
        },function(){
          return null;
        });
    },
    actions:{
        updateprofile(){
            let controller = this.get('controller');
            let password = controller.get('password');
            let name = controller.get('name');
            let address = controller.get('address');
            let phone = controller.get('phone');
            let schoolName = controller.get('kidSchoolName');
            let schoolAddress = controller.get('kidSchoolAddress');            
            let _this = this;
            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;
            let email = this.get('loginEmail');
            this.get('store').findRecord('kids', id).then(function(record){
                if (name) {
                    record.set('name', name);
                }
                else{
                    if (!record.get('name')){alert('Enter name');throw new Error('Enter data');}
                    record.set('name', record.get('name'));
                }
                if (address){
                    record.set('address', address);
                }
                else{
                    if (!record.get('address')){alert('Enter address');throw new Error('Enter data');}
                    record.set('address', record.get('address'));
                }
                if (phone){
                    record.set('phone', phone);
                }
                else{
                    if (!record.get('phone')){alert('Enter phone');throw new Error('Enter data');}
                    record.set('phone', record.get('phone'));
                }
                if (schoolName){
                    record.set('kidSchoolName', schoolName);
                }
                else{
                    if (!record.get('kidSchoolName')){alert('Enter school name');throw new Error('Enter data');}
                    record.set('kidSchoolName', record.get('kidSchoolName'));
                }
                if (schoolAddress){
                    record.set('kidSchoolAddress', schoolAddress);
                }
                else{
                    if (!record.get('kidSchoolAddress')){alert('Enter school address');throw new Error('Enter data');}
                    record.set('kidSchoolAddress', record.get('kidSchoolAddress'));
                }
                record.save();
            }, function(){
                let newProfile = _this.get('store').createRecord('kids', {
                    id: id,
                    name: name,
                    address: address,
                    phone: phone,
                    kidSchoolName: schoolName,
                    kidSchoolAddress: schoolAddress
                });
                newProfile.save().then(function(){
                    alert("Profile created!!");
                })
            });
            if(password){
                user.updatePassword(password).then(function(){
                    alert('Profile Updated!!');
                });
            }
        }
    }
});
