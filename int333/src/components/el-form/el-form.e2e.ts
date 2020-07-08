import { newE2EPage } from '@stencil/core/testing';

describe('el-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<el-form></el-form>');

    const element = await page.find('el-form');
    expect(element).toHaveClass('hydrated');
  });
});
