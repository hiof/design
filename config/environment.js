/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'design',
    podModulePrefix: 'design/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "'self' hiof.no",
      'img-src': "'self' https://hiof.no http://hiof.no placehold.it https://placeholdit.imgix.net www.google-analytics.com", // For placeholder images
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' cloudflare.com cdnjs.cloudflare.com https://gstatic.com www.google-analytics.com",
      'style-src': "'self' 'unsafe-inline' cloudflare.com cdnjs.cloudflare.com https://fonts.googleapis.com https://gstatic.com",
      'font-src': "'self' fonts.googleapis.com https://fonts.gstatic.com gstatic.com"
    },
    'ember-component-css': {
      namespacing: true
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.trackingId = 'UA-2034265-6';
  }

  return ENV;
};
