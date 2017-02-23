import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-section-footer', 'Integration | Component | content section footer', {
  integration: true
});

test('it renders', function(assert) {
  this.set('author', 'Kenneth');
  this.set('date', '24.12.16');
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content-section-footer author=author date=date}}`);

  assert.equal(this.$().text().trim(), 'Oppdatert av Kenneth on 24.12.16');

  // Template block usage:
  this.render(hbs`
    {{#content-section-footer author=author date=date}}
      Oppdatert av Kenneth on 24.12.16
    {{/content-section-footer}}
  `);

  assert.equal(this.$().text().trim(), 'Oppdatert av Kenneth on 24.12.16');
});
