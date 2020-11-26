# \<kemet-tabs>

## Installation
```bash
npm i @kemet/kemet-tabs
```

## Usage
```js
  import '@kemet/kemet-tabs/kemet-tabs.js';
  import '@kemet/kemet-tabs/kemet-tab.js';
  import '@kemet/kemet-tabs/kemet-tab-panel.js';
```

```html
<kemet-tabs selected="ffxv">
  <nav slot="links">
    <kemet-tab link="one">One</kemet-tab>
    <kemet-tab link="two">Two</kemet-tab>
    <kemet-tab link="three">Three</kemet-tab>
  </nav>
  <section slot="panels">
    <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
    <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
    <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
  </section>
</kemet-tabs>
```

[Click here](http://kemet.online/tabs) for more docs.
