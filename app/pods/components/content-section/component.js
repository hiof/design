import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  attributeBindings: ['data-section-id'],
  classNames: ['section'],
  willInsertElement: function(){
    //illustrationPath: 'https://hiof.no/assets/plugins/design-'+model.data.,post.type+'/illustrations/'+post.attributes.illustration
  },
  didInsertElement: function() {
    //var count = 0;
    //Ember.$('img').on('click', function(){
    //  count = 1;
    //  if (count > 0) {
    //  var thisID = Ember.$(this).attr('data-id');
    //  console.log(thisID);
    //  };
    //});
  },
  actions: {
    openModal(element){
      Ember.$('#modal-image-'+element).modal();
      //console.log('modal-image-'+element);
    }
  }

});
