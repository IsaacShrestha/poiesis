import Ember from 'ember';

export default Ember.Component.extend({
	pageNameinUrl: null,

	pageNameinUrl: Ember.computed(function(){
  		var url = window.location.pathname;
  		var pageNameinUrl = url.substring(url.lastIndexOf('/')+1);
  		return pageNameinUrl;
  	}),


});
