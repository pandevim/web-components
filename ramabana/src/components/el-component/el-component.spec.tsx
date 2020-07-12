import { newSpecPage } from '@stencil/core/testing';
import { ElComponent } from './el-component';

describe('el-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElComponent],
      html: `<el-component></el-component>`,
    });
    expect(page.root).toEqualHtml(`
      <el-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </el-component>
    `);
  });
});
