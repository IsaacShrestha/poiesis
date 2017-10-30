import Ember from 'ember';

export default Ember.Controller.extend({
    roles: ['kids', 'guardians', 'volunteers'],
    defaultValue: 'kids',
    actions: {
        selectRole(value) { 
            this.set('currentValue', value);
            this.set('defaultValue', value);
        }
    }
});
