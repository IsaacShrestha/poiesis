import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ride-header-confirmed', 'Integration | Component | ride header confirmed', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ride-header-confirmed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ride-header-confirmed}}
      template block text
    {{/ride-header-confirmed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
