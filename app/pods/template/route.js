import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var data = Ember.$.getJSON('http://hiof.no/api/v2/designguidelines/?type=templates');
        console.log(data);
        return data;
    }
});
