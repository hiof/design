import Ember from 'ember';
import fetch from 'ember-network/fetch';
export default Ember.Route.extend({
  model() {
    return fetch('http://hiof.no/api/v2/designguidelines/?type=templates')
      .then(function(response) {
        return response.json();
      });
  }
});
