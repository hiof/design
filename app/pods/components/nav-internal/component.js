import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'aside',
    classNames: ['internal-nav'],
    didInsertElement: function() {
        Ember.$('.nav-internal').toc({
            title: '',
            listType: 'ul'
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
