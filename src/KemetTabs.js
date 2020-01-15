/* eslint-disable no-param-reassign */
import { LitElement, html} from 'lit-element';

export class KemetTabs extends LitElement {

  static get properties() {
    return {
      'selected': {
        type: String,
        reflect: true,
      },

      'selectedIndex': {
        type: Number,
      }
    };
  }

  constructor() {
    super();

    this.tabs = [];
    this.panels = [];
    this.selectedIndex = 0;
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
    const index = {
      tabs: 0,
      panels: 0,
    };

    tabs.forEach(tab => {
      // give each tab an index to select by if link/panel is not used
      tab.index = index.tabs;
      index.tabs += 1;

      // store the list of tabs
      this.tabs = this.tabs.concat(tab);
    });

    panels.forEach(panel => {
      // give each panel an index to select by if link/panel is not used
      panel.index = index.panels;
      index.panels += 1;

      // store the list of panels
      this.panels = this.panels.concat(panel);
    });

    this.tabs[1].selected = true;
    this.panels[1].selected = true;
  }

  selectTab() {
    // if the user uses the selected attribute select by it
    if(this.selected) {
      this.tabs.forEach(tab => {
        const tabName = tab.getAttribute('link');

        if (tabName === this.selected) {
          tab.selected = true;
          this.selected = tabName;
        } else {
          tab.selected = false;
        }
      });

    // otherwise select by index
    } else {
      this.tabs.forEach(tab => {
        if(this.selectedIndex === tab.index) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
      });
    }
  }

  selectPanel() {
    // if the user uses the selected attribute select by it
    if(this.selected) {
      this.panels.forEach(panel => {
        const panelName = panel.getAttribute('panel');

        if (panelName === this.selected) {
          panel.selected = true;
        } else {
          panel.selected = false;
        }
      });

    // otherwise select by index
    } else {
      this.panels.forEach(panel => {
        if(this.selectedIndex === panel.index) {
          panel.selected = true;
        } else {
          panel.selected = false;
        }
      });
    }
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
    // if selected has been set, use the string attribute
    if (this.selected) {
      this.selected = event.detail.getAttribute('link');

    // otherwise use the generated index
    } else {
      this.selectedIndex = event.detail.index;
    }

    this.dispatchTabChange();
  }
}
