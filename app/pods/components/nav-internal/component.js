import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['internal-nav'],
  didInsertElement: function() {
    Ember.$('.nav-internal').toc({
      title: '',
      listType: 'ul',
      headers: '.content h1, .content h2, .content h3, .content h4, .content h5, .content h6',
      showEffect: 'fadeIn'
    });
    //Ember.$('body').scrollspy({ target: 'nav.nav-internal' });
    Ember.$('.nav-internal ul').addClass('nav nav-pills nav-stacked');

    Ember.$('.nav-internal a').on('click', function(e) {
      e.preventDefault();
      var el = Ember.$(this).attr('href');



      Ember.$('html, body').animate({
        scrollTop: Ember.$(el).offset().top
      }, 200);

      //Ember.$.scrolTo($(this).attr('href'));
      //console.log(this);
    });
  }
});
