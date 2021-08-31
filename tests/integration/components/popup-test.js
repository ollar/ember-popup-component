import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | popup', function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function () {
        this.set('trigger', 'trigger');
        this.set('content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nulla aliquet enim tortor at auctor urna nunc id. Neque laoreet suspendisse interdum consectetur libero. Nulla malesuada pellentesque elit eget.');
        this.set('modal', 'Duis ultricies lacus sed turpis tincidunt. Libero id faucibus nisl tincidunt eget nullam non nisi. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vitae sapien pellentesque habitant morbi tristique senectus et. Mattis enim ut tellus elementum sagittis vitae et leo duis. Etiam tempor orci eu lobortis elementum nibh tellus. Quis viverra nibh cras pulvinar mattis nunc. Odio pellentesque diam volutpat commodo sed. Congue mauris rhoncus aenean vel elit scelerisque. At auctor urna nunc id cursus metus aliquam eleifend. Nibh mauris cursus mattis molestie a iaculis at.');
    });

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<Popup />`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
            <Popup>
                template block text
            </Popup>
        `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });

    test('clicking on trigger shows content', async function (assert) {
        // Template block usage:
        await render(hbs`
            <Popup class='x-left y-bottom' as |popup|>
            <popup.Trigger title="trigger">
                {{this.trigger}}
            </popup.Trigger>
            <popup.Content>
                {{this.content}}
            </popup.Content>
            </Popup>
        `);

        await click('button');

        assert.equal(this.element.querySelector('.dropdown').textContent.trim(), this.content);
    });

    test('clicking twice on trigger shows and hides content', async function (assert) {
        // Template block usage:
        await render(hbs`
            <Popup class='x-left y-bottom' as |popup|>
            <popup.Trigger title="trigger">
                {{this.trigger}}
            </popup.Trigger>
            <popup.Content>
                {{this.content}}
            </popup.Content>
            </Popup>
        `);

        for (var i = 0; i < 10; i++) {
            await click('button');
            assert.equal(this.element.querySelector('.dropdown').textContent.trim(), this.content);

            await click('button');
            assert.equal(this.element.querySelector('.dropdown'), null);
        }
    });

    test('clicking twice on trigger shows and hides modal', async function (assert) {
        // Template block usage:
        await render(hbs`
            <Popup class='x-left y-bottom' as |popup|>
            <popup.Trigger title="trigger">
                {{this.trigger}}
            </popup.Trigger>
            <popup.Modal>
                {{this.content}}
            </popup.Modal>
            </Popup>
        `);

        for (var i = 0; i < 10; i++) {
            await click('button');
            assert.equal(this.element.querySelector('.modal').textContent.trim(), this.content);

            await click('button');
            assert.equal(this.element.querySelector('.modal'), null);
        }
    });
});
