import Component from '@ember/component'
import $ from 'jquery';

export default Component.extend({
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
      $(this).toggleClass('open');
    });
  }
});
