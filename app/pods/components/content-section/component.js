import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  attributeBindings: ['data-section-id'],
  classNames: ['section']

});
