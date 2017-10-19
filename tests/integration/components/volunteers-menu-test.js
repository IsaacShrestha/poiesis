import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('volunteers-menu', 'Integration | Component | volunteers menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{volunteers-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#volunteers-menu}}
      template block text
    {{/volunteers-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
