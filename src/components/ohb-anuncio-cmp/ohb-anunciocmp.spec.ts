import { newSpecPage } from '@stencil/core/testing';
import { OhbAnunciocmp} from './ohb-anunciocmp';

describe('ohb-anunciocmp', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [OhbAnunciocmp],
      html: '<ohb-anunciocmp></ohb-anunciocmp>'
    });
    expect(root).toEqualHtml(`
      <ohb-anunciocmp>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ohb-anunciocmp>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [OhbAnunciocmp],
      html: `<ohb-anunciocmp first="Stencil" last="'Don't call me a framework' JS"></ohb-anunciocmp>`
    });
    expect(root).toEqualHtml(`
      <ohb-anunciocmp first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ohb-anunciocmp>
    `);
  });
});
