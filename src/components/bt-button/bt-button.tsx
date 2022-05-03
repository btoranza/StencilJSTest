import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bt-button',
  styleUrl: 'bt-button.css',
  shadow: true,
})
export class BtButton {
  @Prop() text: string;
  @Prop() action: 'primary' | 'secondary' | 'error' = 'primary';
  @Prop() emojis: boolean = false;
  @Prop({ reflect: true }) opensModal: boolean = false;
  @State() isHappy: boolean = true;

  @Event({ bubbles: true, composed: true }) onButtonClickEvent: EventEmitter<any>;
  clickHandler(event: any) {
    this.onButtonClickEvent.emit(event);
  }

  onClickButton(event: any) {
    console.log(this.opensModal);
    if (this.emojis) {
      this.clickHandler(event);
      this.isHappy = !this.isHappy;
    } else {
      this.clickHandler(event);
    }
  }

  render() {
    if (this.emojis) {
      return (
        <div class="btButton-container">
          <span class="btButton-emoji">{this.isHappy ? '😊' : '😭'}</span>
          <button class={`btButton btButton--${this.action}`} onClick={this.onClickButton.bind(this, this.opensModal)}>
            {this.text}
          </button>

          <span class="btButton-emoji">{this.isHappy ? '😊' : '😭'}</span>
        </div>
      );
    } else {
      return (
        <div class="btButton-container">
          <button class={`btButton btButton--${this.action}`} onClick={this.onClickButton.bind(this, this.opensModal)}>
            {this.text}
          </button>
        </div>
      );
    }
  }
}
