import Ember from 'ember';

export function convertAeoaa(params /*, hash*/ ) {

    if (typeof params[0] === 'undefined') {
        return;
    } else {


        var res = params[0].replace('æ', 'ae').replace('ø', 'oe').replace('å', 'aa').replace('å', 'aa').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        return res;
    }
}

export default Ember.Helper.helper(convertAeoaa);
