import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.reject('Problem with Second Thing');
  },

  actions: {

    error(error, transition, model) {
      console.log('Error in Second', error);
      return true;
    }

  }

});
