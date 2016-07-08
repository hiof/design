import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  author: attr('string'),
  basename: attr('string'),
  date: attr('string'),
  iso8601Date: attr('string'),
  position: attr(),
  preview: attr('string'),
  title: attr('string'),
  titletype: attr(),
});
