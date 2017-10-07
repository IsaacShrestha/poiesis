import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('guardians-ridehistory', 'Integration | Component | guardians ridehistory', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{guardians-ridehistory}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#guardians-ridehistory}}
      template block text
    {{/guardians-ridehistory}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
