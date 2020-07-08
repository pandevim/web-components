import { newE2EPage } from '@stencil/core/testing';

describe('el-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<el-spinner></el-spinner>');

    const element = await page.find('el-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
