import { newE2EPage } from '@stencil/core/testing';

describe('el-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<el-component></el-component>');

    const element = await page.find('el-component');
    expect(element).toHaveClass('hydrated');
  });
});
