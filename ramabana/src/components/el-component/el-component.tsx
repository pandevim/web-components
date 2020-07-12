import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'el-component',
  styleUrl: 'el-component.css',
  shadow: true,
})
export class ElComponent implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot>
          <p>Hi, I'm a test component</p>
        </slot>
      </Host>
    );
  }

}
