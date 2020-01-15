import { html, fixture, expect } from '@open-wc/testing';

import '../kemet-tabs.js';
import '../kemet-tab.js';
import '../kemet-tab-panel.js';

describe('KemetTabs', () => {
  it('can select a panel', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffvii"></kemet-tabs>
    `);

    expect(element.selected).to.equal('ffvii');
  });

  it('can populate tabs and panels correctly', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffxv">
        <nav slot="links">
          <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
          <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
          <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel panel="ffvii">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/final-fantasy-vii-logo-png-transparent.png" />
          </kemet-tab-panel>
          <kemet-tab-panel panel="ffxv">
            <img src="https://cdn.gearnuke.com/wp-content/uploads/2016/07/final-fantasy-xv-1-2-768x432.png" />
          </kemet-tab-panel>
          <kemet-tab-panel panel="ffx">
            <img src="https://www.pngkey.com/png/full/76-768324_final-fantasy-x-logo-png-final-fantasy-x.png" />
          </kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    expect(element.tabs.length).to.equal(3);
    expect(element.panels.length).to.equal(3);
  });

  it('should correctly select a tab', async () => {
    const element = await fixture(html`
      <kemet-tabs selected="ffxv">
        <nav slot="links">
          <kemet-tab link="ffvii">Final Fantasy VII</kemet-tab>
          <kemet-tab link="ffxv">Final Fantasy XV</kemet-tab>
          <kemet-tab link="ffx">Final Fantasy X</kemet-tab>
        </nav>
        <section slot="panels">
          <kemet-tab-panel panel="ffvii">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/final-fantasy-vii-logo-png-transparent.png" />
          </kemet-tab-panel>
          <kemet-tab-panel panel="ffxv">
            <img src="https://cdn.gearnuke.com/wp-content/uploads/2016/07/final-fantasy-xv-1-2-768x432.png" />
          </kemet-tab-panel>
          <kemet-tab-panel panel="ffx">
            <img src="https://www.pngkey.com/png/full/76-768324_final-fantasy-x-logo-png-final-fantasy-x.png" />
          </kemet-tab-panel>
        </section>
      </kemet-tabs>
    `);

    element.querySelector('[link="ffvii"').click();

    element.addEventListener('kemet-tab-selected', () => {
      expect(element.selected).to.equal('ffvii');
    });
  });

  it('snapshot', async () => {
    const element = await fixture(html`
      <kemet-tabs></kemet-tabs>
    `);

    expect(element).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const element = await fixture(html`
      <kemet-tabs></kemet-tabs>
    `);

    await expect(element).shadowDom.to.be.accessible();
  });
});
