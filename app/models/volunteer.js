import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
   
    manufacturer: DS.attr('string'), 
    modelNo: DS.attr('string'),   
    carColor: DS.attr(''),    
    buildYear: DS.attr('string'),
    registerationNo: DS.attr(''),
    licenseNo: DS.attr('string'),    
});
