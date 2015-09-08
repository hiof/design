import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  basename: DS.attr('string'),
  date: DS.attr('string'),
  preview: DS.attr('string')
});
