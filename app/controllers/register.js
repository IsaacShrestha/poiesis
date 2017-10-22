import Ember from 'ember';

export default Ember.Controller.extend({
    roles: ['Student', 'Parent', 'Volunteer'],
    defaultValue: 'Student',
    actions: {
        selectRole(value) { 
            this.set('currentValue', value);
            this.set('defaultValue', value);
        }
    }
});
