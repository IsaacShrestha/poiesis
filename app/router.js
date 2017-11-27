import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('register');
  this.route('login');
  this.authenticatedRoute('dashboard');

  //routes for guardians
  this.route('guardians', function() {
    this.route('makerequests');
    this.route('dashboard');
    this.route('profile');
    this.route('ridehistories');
  });

  //routes for volunteers
  this.route('volunteers', function() {
    this.route('dashboard', {path: '/'});
    this.route('dashboard');
    this.route('profile');
    this.route('newriderequests');
    this.route('acceptedrequests');
    this.route('ridehistories');
    this.route('makerequests');
    this.route('viewrides');
  });

  this.route('kids', function() {
    this.route('dashboard', {path: '/'});
    this.route('dashboard');
    this.route('profile');
    this.route('history');
  });
});

export default Router;
