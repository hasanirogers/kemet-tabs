/* eslint-disable no-param-reassign */
import { LitElement, html} from 'lit-element';

export class KemetTabs extends LitElement {

  static get properties() {
    return {
      'selected': {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.tabs = [];
    this.panels = [];
    this.addEventListener('kemet-tab-selected', this.tabSelectedChange.bind(this));
  }

  render() {
    return html`
      <nav id="links">
        <slot name="links"></slot>
      </nav>
      <section id="panels">
        <slot name="panels"></slot>
      </section>
    `;
  }

  firstUpdated() {
    this.init();
  }

  updated() {
    this.selectTab();
    this.selectPanel();
  }

  init() {
    const tabs = this.querySelectorAll('kemet-tab');
    const panels = this.querySelectorAll('kemet-tab-panel');

    Array.prototype.forEach.call(tabs, tab => {
      this.tabs = this.tabs.concat(tab);
    });

    Array.prototype.forEach.call(panels, panel => {
      this.panels = this.panels.concat(panel);
    });
  }

  selectTab() {
    Array.prototype.forEach.call(this.tabs, tab => {
      const tabName = tab.getAttribute('link');

      if (tabName === this.selected) {
        tab.selected = true;
        this.selected = tabName;
      } else {
        tab.selected = false;
      }
    });
  }

  selectPanel() {
    Array.prototype.forEach.call(this.panels, panel => {
      const panelName = panel.getAttribute('panel');

      if (panelName === this.selected) {
        panel.selected = true;
      } else {
        panel.selected = false;
      }
    });
  }

  dispatchTabChange() {
    const tabChanged = new CustomEvent('kemet-tab-changed', {
      bubbles: true,
      composed: true,
      detail: this.selected,
    });

    this.dispatchEvent(tabChanged);
  }

  tabSelectedChange(event) {
    this.selected = event.detail.getAttribute('link');
    this.dispatchTabChange();
  }
}
