import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kids-new-profle', 'Integration | Component | kids new profle', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kids-new-profle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kids-new-profle}}
      template block text
    {{/kids-new-profle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
