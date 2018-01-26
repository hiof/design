import Route from '@ember/routing/route';
import fetch from 'fetch';
import $ from 'jquery';

export default Route.extend({
  model() {
    return fetch('https://www.hiof.no/api/v2/designguidelines/?type=templates')
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

        $('html, body').animate({
          scrollTop: $("#"+del).offset().top -100
        }, 1000);


      }, 100);

    }


  },
});
