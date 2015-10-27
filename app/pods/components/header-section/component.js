import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['header'],
  //actions: {
  //  toggleNav(){
  //    this.toggle
  //  }
  //}
  didInsertElement: function(){
    this.$('.hamburger').on('click', function(e){
      e.preventDefault();
      Ember.$(this).toggleClass('open');
    });
  }
});
