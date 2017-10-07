import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('guardians-menulist', 'Integration | Component | guardians menulist', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{guardians-menulist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#guardians-menulist}}
      template block text
    {{/guardians-menulist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
