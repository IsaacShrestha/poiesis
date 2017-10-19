import Ember from 'ember';

export default Ember.Component.extend({
	addMoreKids: false,
	
	actions:{
		addKids(){
			this.set('addMoreKids',true);
		}
	},
});
