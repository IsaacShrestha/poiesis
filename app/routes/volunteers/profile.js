import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    // model() {
    //     let user = this.get('firebaseApp').auth().currentUser;
    //     let id = user.uid;
    //     let email = this.set('loginEmail', user.email);
    //     return this.get('store').findRecord('volunteer', id).then(function(userProfile){
    //       return userProfile;
    //     },function(){
    //       return null;
    //     });
    // },
    actions:{
        updateprofile(){
            let controller = this.get('controller');
            let name = controller.get('name');
            let address = controller.get('address');
            let phone = controller.get('phone');
            let email = controller.get('email');

            let manufacturer = controller.get('manufacturer');
            let model = controller.get('model');
            let color = controller.get('color');
            let buildyear = controller.get('buildyear');
            let registeration = controller.get('registeration');
            let license = controller.get('license');            

            let password = controller.get('password');
            let _this = this;

            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;

            this.get('store').findRecord('volunteer', id).then(function(record){
                record.set('name', name);
                record.set('address', address);
                record.set('phone', phone);
                record.set('manufacturer', manufacturer);
                record.set('modelNo', model);
                record.set('carColor', color);
                record.set('buildyear', buildyear);
                record.set('registerationNo', registeration);
                record.set('licenseNo', license);            
                record.save();
            }, function(){
                let newProfile = _this.get('store').createRecord('volunteer', {
                    id: id,
                    name: name,
                    address: address,
                    phone: phone,
                    manufacturer: manufacturer,
                    modelNo: model,
                    carColor: color,
                    buildyear: buildyear,
                    registerationNo: registeration,
                    licenseNo: license
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
