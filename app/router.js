import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('things', function() {
    this.route('first');
    this.route('second');
    this.route('third');
    this.route('fourth', function() {});
    this.route('fifth', function() {});
  });
});

export default Router;
