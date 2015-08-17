import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('sections');
  //this.route('section');



  this.route("section",{ path: '/' }, function() {
      this.route("section", {
          path: ":section_id"
      });


  });


  this.route('file',{ path: '/filer' }, function(){
     this.route("file", {
          path: ":file_id"
      });
  });
});

export default Router;
