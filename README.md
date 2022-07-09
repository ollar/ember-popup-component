[![Lint and Test](https://github.com/ollar/ember-popup-component/actions/workflows/test_lint.js.yml/badge.svg)](https://github.com/ollar/ember-popup-component/actions/workflows/test_lint.js.yml)

# ember-popup-component

Simple popup/dropdown component for ember.js (no styles, no libs).


## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


## Installation

```
ember install ember-popup-component
```


## Usage

```
<Popup class='x-left y-bottom' as |popup|>
    <popup.Trigger title="trigger">
        TRIGGER
    </popup.Trigger>

    <popup.Content>
        CONTENT
    </popup.Content>
</Popup>
```

where returned `Popup` is a hash of:

- `Trigger` {element} - toggles popup show/hide.
- `Content` {element} - wrapper over popup content.
- `Modal` {element} - wrapper over popup content with class `modal`;
- `opened` {boolean} - popup opened state
- `openPopup` {function} - open popup function
- `closePopup` {function} - close popup function
- `togglePopup` {function} - toggle popup function
- `contentEl` {HTMLElement} - reference to popup's content element
- `triggerEl` {HTMLElement} - reference to popup's trigger element

There are optional CSS classes to manage popup's content position:
`['x-left', 'x-center', 'x-right', 'y-top', 'y-center', 'y-bottom']`


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
