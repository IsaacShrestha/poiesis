import Ember from 'ember';

export default Ember.Component.extend({
	active: false,
	reqDate: '',
	date: new Date(),
	
	
	active:Ember.computed(function(date){
		date = this.get('date');
	}),

});
