import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  queryParams: ['del'],
  del: null,
  actions: {
    goToSection(){
      let del = this.get('del');

      $('html, body').animate({
        scrollTop: $("#"+del).offset().top -80
      }, 1000);

    }//,
    //click(el){
      //console.log(el);
    //}
  }
});
