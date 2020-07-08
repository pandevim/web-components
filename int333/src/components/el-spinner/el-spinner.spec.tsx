import { newSpecPage } from '@stencil/core/testing';
import { ElSpinner } from './el-spinner';

describe('el-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElSpinner],
      html: `<el-spinner></el-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <el-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </el-spinner>
    `);
  });
});
