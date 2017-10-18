import Ember from 'ember';

export default Ember.Component.extend({
	startDate: '',

	startDate: Ember.computed(function(){
		let reqDate = new Date();
		return reqDate;
	})

});
