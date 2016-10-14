import Ember from 'ember';
import fetch from 'ember-network/fetch';
export default Ember.Route.extend({


  model() {
    //console.log(params.del);
    //let store = this.get('store');
    //store.createRecord('params', {
    //  id: 1,
    //  del: params.del
    //});
    return fetch('http://hiof.no/api/v2/designguidelines/?type=guides')
    .then(function(response) {

      //console.log(response.json());

      //store.createRecord('guide', {
      //
      //});
      //this.store.createRecord('guide', {
      //  id: 1,
      //  author: "Kenneth"
      //});

      return response.json();
    });
  },

  afterModel: function() {

    //let store = this.get('store');
    //let del = store.get('params');
    //console.log(del);
  },
  setupController: function(controller, model) {
    this._super(controller, model);


    //Ember.$('.nav-internal ').Stickyfill();


    //Ember.$('.internal-nav .nav').Stickyfill();
    let del = this.get('controller.del');

    //console.log(del);

    if (typeof del === 'string' || del instanceof String){
      setTimeout(function(){

        Ember.$('html, body').animate({
          scrollTop: Ember.$("#"+del).offset().top -80
        }, 1000);


      }, 100);

    }


  }

});
