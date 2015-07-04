import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.reject('Problem with Third Thing').then(null, (error) => {
      return {
        error: error
      }
    });
  },

  setupController(controller, model) {
    if (Ember.isPresent(model.error)) {
      controller.set('error', model.error);
    }
  }

});
