import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model = new User('', '', '', '', '');

  ngOnInit() {
  }

  onSubmit(model: User, isValid: boolean): void {
    console.log(model, isValid);
}

}
