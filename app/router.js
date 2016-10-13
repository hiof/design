import Ember from 'ember';
import config from './config/environment';
import { AnalyticsTransitionRouterMixin } from 'analytics';

const { get, run } = Ember;

var Router = Ember.Router.extend(AnalyticsTransitionRouterMixin, {
  location: config.locationType,
  didTransition() {
  this._super(...arguments);
  if (!get(this, 'fastboot.isFastBoot')) {
    //console.log('scroll to top');
    window.scrollTo(0, 0);
  }
},
});

Router.map(function() {
  //this.route('sections');
  //this.route('section');



  this.route("show",{ path: '/' }, function() {
      this.route("show", {
          path: ":show_id"
      });


  });

  this.route('guide', {path: '/grafisk-profil'}, function(){
      this.route("guide", {
          path: ":guide_id"
      });
  });

  this.route('webcomponent', {path: '/webdesign'}, function(){
      this.route("webcomponent", {
          path: ":webcomponent_id"
      });
  });

  this.route('template', {path: '/dokumentmaler'}, function(){
      this.route("template", {
          path: ":template_id"
      });
  });

  //this.route('show');
  //this.route('internalnav');
});

export default Router;
