import { Component, Host, h, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'bt-input',
  styleUrl: 'bt-input.css',
  shadow: true,
})
export class BtInput {
  @Prop({ reflect: true, mutable: true }) name: string;
  textInput!: HTMLInputElement;

  handleChange(event) {
    this.name = event.target.value;
    console.log(this.textInput.value);
  }

  @Watch('name')
  watchNameHandler(newValue: string, oldValue: string) {
    if (newValue !== '') {
      this.textInput.classList.remove('btInput--invalid');
      this.textInput.classList.add('btInput--valid');
    } else {
      this.textInput.classList.remove('btInput--valid');
      this.textInput.classList.add('btInput--invalid');
    }
  }

  render() {
    return (
      <Host class="btInput-container">
        <input class="btInput btInput--invalid" onInput={e => this.handleChange(e)} ref={el => (this.textInput = el as HTMLInputElement)}></input>
        <span class="btInput-message">
          <slot /> {this.name}
        </span>
      </Host>
    );
  }
}
