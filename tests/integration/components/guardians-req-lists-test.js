import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('guardians-req-lists', 'Integration | Component | guardians req lists', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{guardians-req-lists}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#guardians-req-lists}}
      template block text
    {{/guardians-req-lists}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
