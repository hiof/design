import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {


        //return fetch('http://hiof.no/api/v2/designguidelines/?type=webcomponents')
        //  .then(function(response) {
        //    return response.json();
        //  });


        var data = Ember.$.getJSON('http://hiof.no/api/v1/designguidelines/?type=webcomponents');
        //console.log(data);
        return data;
    },
    didInsertElement(){
      this._super(...arguments);
      console.log('did render...');


      //this.$('body').addClass('enabled');
    },
    actions:{
      playVideo(thisVideo){
        //thisVideo.paused ? this.play() : this.pause();
      }
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
