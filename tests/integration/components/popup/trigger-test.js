import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popup/trigger', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`
            <Popup as |popup|>
                <popup.Trigger>
                    trigger
                </popup.Trigger>
            </Popup>
        `);

        assert.strictEqual(this.element.textContent.trim(), 'trigger');
    });
});
