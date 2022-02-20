const template = document.getElementById('template') as HTMLTemplateElement;

customElements.define(
  'my-element',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
