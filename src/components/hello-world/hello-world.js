const template = document.createElement('template');

template.innerHTML =
  /*html*/
  ` 
  <style>
    .container {
      color: white;
      background-color: rgb(111, 111, 111);
      border-radius: 10px;
      padding: 10px;
      margin: 30px auto;
      display: block;
      width: 50%;
      font-family: monospace;
      text-align: center;
    }

    .message-holder {
      font-size: 2rem;
      text-decoration: underline;
    }
  </style>

  <div class="container">
    <h1 class="message-holder">Here I am!</h1>
  </div>`;

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

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
    this.setAttribute('message', value);
    this.updateMessage();
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
