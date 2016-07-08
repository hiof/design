import Ember from 'ember';

export function toLoverCase(params/*, hash*/) {
  //var res = params[0]
  return params[0].toLowerCase();
}

export default Ember.Helper.helper(toLoverCase);
