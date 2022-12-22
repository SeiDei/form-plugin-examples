import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'greetings',
            fallbackDisableSubmit: false,
            description: 'hello world',
            iconUrl: "one-line-text",
            groupName: 'Chintan',
            version: '1.0',
            properties: {
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes'
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                }
            },
            standardProperties: {
                readOnly: true,
                required: true,
                description: true,
            }
        };
    }
