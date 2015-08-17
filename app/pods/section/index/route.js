import Ember from 'ember';

export default Ember.Route.extend({


    model: function() {



        return Ember.$.getJSON("/api/sections.json").then(function(data) {

            var sections = [];
            Ember.$.each(data, function(key, val) {
                sections.push(val);
            });

            return sections;
        });

    }

});
