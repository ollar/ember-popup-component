import clickOutsideEl from 'dummy/utils/click-outside-el';
import { module, test } from 'qunit';
import { render, click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Unit | Utility | click-outside-el', function (hooks) {
    setupRenderingTest(hooks);

    // TODO: Replace this with your real tests.
    test('it works', async function (assert) {
        assert.expect(2);

        this.set('clickHandler', (e) => {
            assert.ok(
                clickOutsideEl(
                    e.target,
                    this.element.querySelector('.outsider')
                )
            );
            assert.notOk(clickOutsideEl(e.target, this.element));
        });
        await render(hbs`
            <div class="el-wrapper">
            <button {{on 'click' this.clickHandler}}>button</button>
            </div>

            <div class="outsider"></div>
        `);

        await click('button');
    });
});
