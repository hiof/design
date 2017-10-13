/* eslint-env node */
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
  app.import(app.bowerDirectory + '/Stickyfill/dist/stickyfill.css');


  if (!process.env.EMBER_CLI_FASTBOOT) {
    // This will only be included in the browser build
    app.import(app.bowerDirectory + '/Stickyfill/dist/stickyfill.js');
    //app.import(app.bowerDirectory + '/tocify/src/javascripts/jquery.tocify.js');
    //app.import(app.bowerDirectory + '/toc/toc.js');
    app.import(app.bowerDirectory + '/bootstrap-v4/dist/js/bootstrap.js');
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
