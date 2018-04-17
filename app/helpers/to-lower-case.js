import { helper } from '@ember/component/helper';

export function toLoverCase(params/*, hash*/) {
  //var res = params[0]
  return params[0].toLowerCase();
}

export default helper(toLoverCase);
