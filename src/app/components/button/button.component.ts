import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter;
  @Input() text: string;
  @Input() color: string;

  constructor() {
    // this.text = '';
    // this.color = '';
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClick.emit();
  }
}
