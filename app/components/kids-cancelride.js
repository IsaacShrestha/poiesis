import Ember from 'ember';

export default Ember.Component.extend({
	todayDate: null,

	todayDate: Ember.computed(function(){
		var today = new Date();
		return today;
	})
});
