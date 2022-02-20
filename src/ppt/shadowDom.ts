customElements.define(
  'my-element',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      shadowRoot.innerHTML = '<p>自定义元素文字颜色不被外部影响</p>';
    }
  }
);

console.log(document.getElementsByTagName('my-element')[0].shadowRoot);
