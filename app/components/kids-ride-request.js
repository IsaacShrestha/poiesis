import Ember from 'ember';

export default Ember.Component.extend({
	startDate: '',

	actions:{
		sendReq(){
			let alert = '';
			this.set('alert', 'Request successfully send');
		}
	},

	startDate: Ember.computed(function(){
		let reqDate = new Date();
		return reqDate;
	})

});
