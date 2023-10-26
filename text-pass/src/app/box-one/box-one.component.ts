import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css']
})
export class BoxOneComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeOne = new EventEmitter<string>();
  inputTextOne: string | undefined;
  onSendOne() {
    this.headingChangeOne.emit(this.inputTextOne);
  }
}
