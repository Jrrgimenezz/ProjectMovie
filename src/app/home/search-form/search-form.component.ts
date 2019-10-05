import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './../../Movies';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {

  @Output() FormDataEvent = new EventEmitter<string>()
  search = new FormControl('')
  constructor(private http: HttpClient) { }


  onClick() {
    this.sendData();
  }
  sendData() {                  //Envío de la información al padre
    this.FormDataEvent.emit(this.search.value);
  }

}
