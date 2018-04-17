'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');


module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    bootstrap: {
      plugins: []
    }
    // Add options here
  });
  //app.import('bower_components/bootstrap/dist/css/bootstrap.css');


  app.import('node_modules/colors/dist/colors.css');
  app.import('node_modules/typography/dist/typography.css');

  if (typeof FastBoot === 'undefined') {
    // This will only be included in the browser build

    app.import('node_modules/popper.js/dist/umd/popper.js');
    //app.import(app.bowerDirectory + '/tocify/src/javascripts/jquery.tocify.js');
    //app.import(app.bowerDirectory + '/toc/toc.js');
    app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  }
  //app.import(app.bowerDirectory + '/scrollspy/jquery-scrollspy.js');
  //app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
  //    destDir: 'fonts'
  //});
  //app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
  //    destDir: 'fonts'
  //});
  //app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
  //    destDir: 'fonts'
  //});
  //app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  //    destDir: 'fonts'
  //});
  //app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
  //    destDir: 'fonts'
  //});




  return app.toTree();
};
