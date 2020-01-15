import { LitElement, html, css } from 'lit-element';

export class KemetTab extends LitElement {

  static get properties() {
    return {
      'selected': {
        type: Boolean,
        reflect: true
      },
      'link': {
        type: String
      },
    };
  }

  constructor() {
    super();

    // property defaults
    this.selected = false;
  }

  static styles = css `
    :host {
      cursor: pointer;
    }

    :host([selected]) {
      cursor: auto;
    }
  `;

  render() {
    return html`
      <slot @click=${this.select}></slot>
    `;
  }

  select() {
    this.dispatchEvent(new CustomEvent('kemet-tab-selected', {
      bubbles: true,
      composed: true,
      detail: this,
    }))
  }
}
