import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['del'],
  del: null,
  actions: {
    goToSection(){
      let del = this.get('del');

      Ember.$('html, body').animate({
        scrollTop: Ember.$("#"+del).offset().top -80
      }, 1000);

    },
    click(el){
      console.log(el);
    }
  }
});
