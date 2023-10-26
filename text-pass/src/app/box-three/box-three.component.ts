import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css']
})
export class BoxThreeComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeThree = new EventEmitter<string>();
  inputTextThree: string | undefined;
  onSendThree() {
    this.headingChangeThree.emit(this.inputTextThree);
  }
}
