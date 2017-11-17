import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('date'),
    time: DS.attr(),
    pickup: DS.attr(),
    dropoff: DS.attr(),
    requestedBy: DS.attr(),
    acceptedBy: DS.attr(),
    status: DS.attr()
});
