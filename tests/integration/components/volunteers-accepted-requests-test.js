import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('volunteers-accepted-requests', 'Integration | Component | volunteers accepted requests', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{volunteers-accepted-requests}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#volunteers-accepted-requests}}
      template block text
    {{/volunteers-accepted-requests}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
