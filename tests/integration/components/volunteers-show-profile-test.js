import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('volunteers-show-profile', 'Integration | Component | volunteers show profile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{volunteers-show-profile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#volunteers-show-profile}}
      template block text
    {{/volunteers-show-profile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
