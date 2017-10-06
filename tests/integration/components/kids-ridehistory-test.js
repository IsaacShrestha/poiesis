import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kids-ridehistory', 'Integration | Component | kids ridehistory', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kids-ridehistory}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kids-ridehistory}}
      template block text
    {{/kids-ridehistory}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
