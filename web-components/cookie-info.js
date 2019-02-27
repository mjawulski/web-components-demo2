let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <b>I'm in shadow dom!</b>
  
`;

class IdCheck extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('cookie-info', IdCheck);
