import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  homeaddress: DS.attr('string'),
  phone: DS.attr('string'),
  schooladdress: DS.attr('string'),
  guardian: DS.attr('string')
});
