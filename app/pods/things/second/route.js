import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.reject('Problem with Second Thing');
  },

  actions: {

    error(error) {
      console.log('Error in Second', error);
      return true;
    }

  }

});
