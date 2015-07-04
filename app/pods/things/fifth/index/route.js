import Ember from 'ember';

const isPresent = Ember.isPresent;

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.reject('Problem with Fifth Thing').then(null, function(error) {
      return { error: error };
    });
  },

  setupController(controller, model) {
    if (isPresent(model.error)) {
      controller.set('error', model.error);
    }
  },

  renderTemplate() {
    if (isPresent(this.get('controller.error'))) {
      this.render('things/fifth/custom-error');
    }
  },

  actions: {

    error() {
      console.log('things.fifth.index error');
      return true;
    }

  }

});
