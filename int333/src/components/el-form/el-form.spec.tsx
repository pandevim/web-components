import { newSpecPage } from '@stencil/core/testing';
import { ElForm } from './el-form';

describe('el-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElForm],
      html: `<el-form></el-form>`,
    });
    expect(page.root).toEqualHtml(`
      <el-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </el-form>
    `);
  });
});
