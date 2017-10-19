import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('req-from-kids', 'Integration | Component | req from kids', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{req-from-kids}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#req-from-kids}}
      template block text
    {{/req-from-kids}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
