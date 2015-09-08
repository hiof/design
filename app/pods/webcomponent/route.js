import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
    return Ember.$.getJSON('http://hiof.no/api/v1/designguidelines/?type=webcomponents');
  }
});
