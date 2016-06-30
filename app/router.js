import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('sections');
  //this.route('section');



  this.route("show",{ path: '/' }, function() {
      this.route("show", {
          path: ":show_id"
      });


  });


  //this.route('file',{ path: '/dokumentmaler' }, function(){
  //   this.route("file", {
  //        path: ":file_id"
  //    });
  //});

  this.route('guide', {path: '/grafisk-profil'}, function(){
      this.route("guide", {
          path: ":guide_id"
      });
  });

  this.route('webcomponent', {path: '/web-komponenter'}, function(){
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
