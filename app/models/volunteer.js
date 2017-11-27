import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
    kidEmails: DS.attr(''),
   
    manufacturer: DS.attr('string'), 
    modelNo: DS.attr('string'),   
    carColor: DS.attr(''),    
    buildyear: DS.attr('string'),
    registerationNo: DS.attr(''),
    licenseNo: DS.attr('string'),    
});
