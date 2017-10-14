import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('login', {path: '/'});
    this.route('login');
    this.route('register');
    this.route('kids');
    this.route('kidsriderequests');
    this.route('kidsridehistories');
    this.route('kidsridecancels');
    this.route('guardians');
    this.route('guardianrequests');
    this.route('guardiansridehistories');
    this.route('guardiansridecancels');
});

export default Router;
