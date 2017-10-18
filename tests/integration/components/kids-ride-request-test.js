import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kids-ride-request', 'Integration | Component | kids ride request', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kids-ride-request}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kids-ride-request}}
      template block text
    {{/kids-ride-request}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
