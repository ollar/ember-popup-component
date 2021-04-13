import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

import checkEventTargetIsOutsideContent from '../utils/click-outside-el';

const ESC = 'Escape';

export default class PopupComponent extends Component {
    @tracked opened = false;
    @tracked triggerEl = null;
    @tracked contentEl = null;

    popupTrigger = 'popup/trigger';

    get popupContent() {
        return this.opened ? 'popup/content' : '';
    }

    get modalContent() {
        return this.opened ? 'popup/modal' : '';
    }

    @action
    openPopup() {
        this.opened = true;
        later(this, function () {
            window.addEventListener('click', this.closeOnClickOutside);
        }, 100);
    }

    @action
    closePopup() {
        this.opened = false;
        window.removeEventListener('click', this.closeOnClickOutside);
    }

    @action
    togglePopup() {
        if (this.opened) {
            return this.closePopup();
        } else {
            return this.openPopup();
        }
    }

    @action
    closeOnClickOutside(e) {
        const { target } = e;
        if (checkEventTargetIsOutsideContent(target, this.contentEl)) {
            this.closePopup();
        }
    }

    @action
    saveTriggerRef(el) {
        this.triggerEl = el;
    }

    @action
    saveContentRef(el) {
        this.contentEl = el;
    }

    @action
    bindEvents() {
        window.addEventListener('keyup', this.handleKeyPress, true);
    }

    @action
    unbindEvents() {
        window.removeEventListener('keyup', this.handleKeyPress, true);
    }

    @action
    handleKeyPress(e) {
        const { code } = e;
        if (code === ESC) {
            e.stopPropagation();
            this.closePopup();
        }
    }
}
