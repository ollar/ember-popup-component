import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popup/modal', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        this.set('content', 'content text')
        // Template block usage:
        await render(hbs`
            <Popup as |popup|>
                <popup.Trigger>
                    trigger
                </popup.Trigger>
                <popup.Modal>
                    {{this.content}}
                </popup.Modal>
            </Popup>
        `);

        await click('button');

        assert.equal(this.element.querySelector('.modal').textContent.trim(), this.content);
    });
});
