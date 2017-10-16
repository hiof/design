import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import GoogleAnalyticsRoute from 'ember-tracker/mixins/google-analytics-route';

const Router = EmberRouter.extend(GoogleAnalyticsRoute,{
  location: config.locationType,
  rootURL: config.rootURL,
  //didTransition() {
  //  this._super(...arguments);
  //  if (!get(this, 'fastboot.isFastBoot')) {
  //    //console.log('scroll to top');
  //    window.scrollTo(0, 0);
  //  }
  //},
});

Router.map(function() {
  this.route("show",{ path: '/' }, function() {
    this.route("show", {
      path: ":show_id"
    });
  });
  this.route('template', {path: '/dokumentmaler'}, function(){
    this.route("template", {
      path: ":template_id"
    });
  });
  this.route('guide', {path: '/grafisk-profil'}, function(){
    this.route("guide", {
      path: ":guide_id"
    });
  });

  this.route('webcomponent', {path: '/web'}, function(){
    this.route("webcomponent", {
      path: ":webcomponent_id"
    });
  });



  this.route('styleguide');
});

export default Router;
