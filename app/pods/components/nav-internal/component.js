import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['internal-nav'],
  didInsertElement: function() {
    Ember.$('.nav-internal').toc({
      title: '',
      listType: 'ul',
      headers: '.section-content h1, .section-content h2, .section-content h3, .section-content h4, .section-content h5, .section-content h6',
      showEffect: 'fadeIn',
      classes: {
        list: 'nav nav-pills nav-stacked',
        item: 'nav-item'
      }
    });
    //Ember.$('.nav-internal ul').addClass('nav nav-pills nav-stacked');



    Ember.$('.nav-internal ul a').addClass('nav-link');

    Ember.$('.nav-internal a').on('click', function(e) {
      e.preventDefault();
      var el = Ember.$(this).attr('href');


      Ember.$('html, body').animate({
        scrollTop: Ember.$(el).offset().top
      }, 200);

      //Ember.$.scrolTo($(this).attr('href'));
      //console.log(this);
    });


    Ember.$('[data-spy="scroll"]').each(function () {
      var $spy = Ember.$(this).scrollspy('refresh');
    });


    Ember.$('.nav-internal').Stickyfill();
    //Ember.$('.nav-internal').affix({
    //  offset: {
    //    top: 0,
    //    bottom: function () {
    //      return (this.bottom = Ember.$('.footer').outerHeight(true));
    //    }
    //  }
    //});

    //TODO: highlight internal-nav when you scroll

    Ember.$('body').scrollspy({ target: 'nav.nav-internal' });


    //Ember.$('.nav-internal').scrollspy();

    //var $nav = $('.internal-nav a');
//
    //$('.nav-internal').scrollspy({
    //  min: $nav.offset().top,
    //  onEnter: function(element, position) {
    //    $nav.addClass('fixed');
    //  },
    //  onLeave: function(element, position) {
    //    $nav.removeClass('fixed');
    //  }
    //});


  }
});
