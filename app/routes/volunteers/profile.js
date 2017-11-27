import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    beforeModel(){
        if(!this.get('session.isAuthenticated')){
            this.transitionTo('login');
        }
        
    },
    model() {
        if(!this.get('session.isAuthenticated')){
            this.transitionTo('login');
        }
        let user = this.get('firebaseApp').auth().currentUser;
        let id = user.uid;
        let email = this.set('loginEmail', user.email);
        return this.get('store').findRecord('volunteer', id).then(function(userProfile){
          return userProfile;
        },function(){
          return null;
        });
    },
    actions:{
        updateprofile(){
            let controller = this.get('controller');
            let name = controller.get('name');
            let address = controller.get('address');
            let phone = controller.get('phone');
            let email = controller.get('email');

            let manufacturer = controller.get('manufacturer');
            let modelNo = controller.get('modelNo');
            let carColor = controller.get('color');
            let buildyear = controller.get('buildyear');
            let registeration = controller.get('registeration');
            let license = controller.get('license');            

            let password = controller.get('password');
            let _this = this;

            let user = this.get('firebaseApp').auth().currentUser;
            let id = user.uid;

            this.get('store').findRecord('volunteer', id).then(function(record){
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
                if (manufacturer){
                    record.set('manufacturer', manufacturer);
                }
                else{
                    if (!record.get('manufacturer')){alert('Enter manufacturer');throw new Error('Enter data');}
                    record.set('manufacturer', record.get('manufacturer'));
                }
                if (modelNo){
                    record.set('modelNo', modelNo);
                }
                else{
                    if (!record.get('modelNo')){alert('Enter model number');throw new Error('Enter data');}
                    record.set('modelNo', record.get('modelNo'));
                }
                if (carColor){
                    record.set('carColor', carColor);
                }
                else{
                    if (!record.get('carColor')){alert('Enter car color');throw new Error('Enter data');}
                    record.set('carColor', record.get('carColor'));
                }
                if (buildyear){
                    record.set('buildyear', buildyear);
                }
                else{
                    if (!record.get('buildyear')){alert('Enter build year');throw new Error('Enter data');}
                    record.set('buildyear', record.get('buildyear'));
                }
                if (registeration){
                    record.set('registerationNo', registeration);
                }
                else{
                    if (!record.get('registerationNo')){alert('Enter registeration number');throw new Error('Enter data');}
                    record.set('registerationNo', record.get('registerationNo'));
                }
                if (license){
                    record.set('licenseNo', license);
                }
                else{
                    if (!record.get('licenseNo')){alert('Enter license number');throw new Error('Enter data');}
                    record.set('licenseNo', record.get('licenseNo'));
                }
                record.save().then(function(){alert('Profile Updated!!!')});
            }, function(){
                let newProfile = _this.get('store').createRecord('volunteer', {
                    id: id,
                    name: name,
                    address: address,
                    phone: phone,
                    manufacturer: manufacturer,
                    modelNo: modelNo,
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
