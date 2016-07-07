import Ember from 'ember';
import fetch from 'ember-network/fetch';
export default Ember.Route.extend({
  model() {
    return fetch('http://hiof.no/api/v2/designguidelines/?type=templates')
      .then(function(response) {
        return response.json();
      });
  },
  setupController: function(controller, model) {
    this._super(controller, model);


    //Ember.$('.internal-nav').Stickyfill();


    let del = this.get('controller.del');

    //console.log(del);

    if (typeof del === 'string' || del instanceof String){
      setTimeout(function(){

        Ember.$('html, body').animate({
          scrollTop: Ember.$("#"+del).offset().top -100
        }, 1000);


      }, 100);

    }


  },
});
