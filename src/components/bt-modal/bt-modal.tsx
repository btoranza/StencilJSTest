import { Component, Host, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'bt-modal',
  styleUrl: 'bt-modal.css',
  shadow: true,
})
export class BtModal {
  @Prop({ reflect: true, mutable: true }) opened: boolean = false;

  closeModal() {
    this.opened = false;
  }

  @Listen('onButtonClickEvent', { target: 'body' })
  buttonHandler(event: CustomEvent) {
    console.log(event);
    if (event.detail === true) {
      this.opened = !this.opened;
    }
  }

  render() {
    return (
      <Host>
        <div class="backdrop" onClick={this.closeModal.bind(this)}>
          <div class="modal">
            <slot />
            <div class="modal-buttons">
              <bt-button text="Ok"></bt-button>
              <bt-button text="Close" action="error"></bt-button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
