import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('kids', function() {
    this.route('newprofile');
    this.route('newridereq', {path: '/'});
    /*this.route('edit', {
      path: ':todo_id/edit'
    });*/


    this.route('showprofile');

    this.route('ridehistory');

    this.route('showridereq');

  });
  
});


export default Router;


