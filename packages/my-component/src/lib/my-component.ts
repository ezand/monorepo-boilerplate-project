import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
class MyComponent extends LitElement {
  @property()
  name = 'Somebody';

  render() {
    return html`<div>Hello from MyElement, ${this.name}!</div>`;
  }
}

export default MyComponent;
