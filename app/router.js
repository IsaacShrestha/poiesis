import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('login', {path: '/'});
	this.route('register');
	this.route('kids');
	this.route('kidsRequestRide');
	this.route('kidsCancelRide');
	this.route('kidsRideHistory');
	this.route('kidsProfile');
});

export default Router;
