import { Component, Input } from '@angular/core';

@Component({
  selector: 'tda-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.scss']
})
export class RemoveButtonComponent {
  @Input()
  active = false;
}
