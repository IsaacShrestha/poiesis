import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('volunteers-profile-update', 'Integration | Component | volunteers profile update', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{volunteers-profile-update}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#volunteers-profile-update}}
      template block text
    {{/volunteers-profile-update}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
