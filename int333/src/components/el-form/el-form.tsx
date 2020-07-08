import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'el-form',
  styleUrl: 'el-form.css',
  shadow: true,
})
export class ElForm implements ComponentInterface {

  render() {
    return (
      <Host>
        <p>Hi, I'm a form</p>
      </Host>
    );
  }

}
