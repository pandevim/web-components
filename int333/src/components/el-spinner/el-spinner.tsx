import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'el-spinner',
  styleUrl: 'el-spinner.css',
  shadow: true,
})
export class ElSpinner implements ComponentInterface {

  render() {
    return (
      <Host>
        <p>Hi, I'm a spinner</p>
      </Host>
    );
  }

}
