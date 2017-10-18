import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('register');
  this.route('dashboard');

  
  //routes for kids template
  this.route('kids', function() {
    this.route('newprofile');
    this.route('newridereq', {path: '/'});
    this.route('showprofile');
    this.route('ridehistory');
    this.route('showridereq');
    this.route('ridealerts');

  });


  
});

export default Router;
