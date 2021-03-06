import templateString from './hello-world.html';

const template = document.createElement('template');
template.innerHTML = templateString;

export class HelloWorld extends HTMLElement {
  constructor() {
    super();

    let templateContent = template.content;

    this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  static get observedAttributes() {
    return ['message'];
  }

  updateMessage() {
    this.shadowRoot.querySelector('.message-holder').innerHTML = `Hello, ${
      this._message || 'World'
    }!`;
  }

  connectedCallback() {
    this.updateMessage();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'message') {
        this._message = newValue;
        this.updateMessage();
      }
    }
  }
}
