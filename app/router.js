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
    this.route('newprofile', {path: '/'});
    this.route('newridereq');
    this.route('showprofile');
    this.route('ridereqlists');
    this.route('showridereq');
    this.route('ridealerts');

  });

  //routes for guardians
  this.route('guardians', function() {
       this.route('reqfromkids');
       this.route('makerequests');
       this.route('ridereqlists');
       this.route('showprofile');
       this.route('newprofile', {path: '/'});
  });

  //routes for volunteers
  this.route('volunteers', function() {
       this.route('showprofile');
       this.route('newprofile', {path: '/'});
       this.route('newriderequests');
       this.route('acceptedrequests');
       this.route('ridehistories');
      
  });


  
});

export default Router;
