import { Service } from 'analytics';
import ENV from '../config/environment';

const app = {
  name: ENV.APP.name,
  version: ENV.APP.version
};

const trackingId = ENV.APP.trackingId;

export default Service.extend({

  trackingId: trackingId,
  trackErrors: true,  // track also errors (sets Ember.onerror)
  app: app,           // only for tracking errors

});
