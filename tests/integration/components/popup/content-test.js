import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popup/content', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Template block usage:
        await render(hbs`
            <Popup class='x-left y-bottom' as |popup|>
            <popup.Trigger title="trigger">
                TRIGGER
            </popup.Trigger>
            <popup.Content>
                template block text
            </popup.Content>
            </Popup>
        `);

        await click('button');

        assert.equal(this.element.querySelector('.dropdown').textContent.trim(), 'template block text');
    });
});
