import { LitElement, html, css } from 'lit-element';

export class KemetTabPanel extends LitElement {

  static get properties() {
    return {
      'selected': {
        type: Boolean,
        reflect: true
      },
      'panel': {
        type: String
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  static styles = css `
    :host {
      display: none;
    }

    :host([selected]) {
      display: block;
    }

    ::slotted(img) {
      max-width: 100%;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}
