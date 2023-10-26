import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css']
})
export class BoxTwoComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeTwo = new EventEmitter<string>();
  inputTextTwo: string = '';
  onSendTwo() {
    this.headingChangeTwo.emit(this.inputTextTwo);
  }
}
