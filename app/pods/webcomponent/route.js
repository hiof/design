import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {

        var data = Ember.$.getJSON('http://hiof.no/api/v1/designguidelines/?type=webcomponents');
        console.log(data);
        return data;
    },
    didInsertElement: function() {

        //this.$('pre code').each(function(i, block) {
        //    //hljs.highlightBlock(block);
        //});
        //this.$('.hamburger').on('click', function(e) {
        //    e.preventDefault();
        //    Ember.$(this).toggleClass('open');
        //});
    }
});
