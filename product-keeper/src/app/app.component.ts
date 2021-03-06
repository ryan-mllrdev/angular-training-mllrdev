import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title: string;
  showSuccess = 'collapse';
  showFailed = 'collapse';
  message: string;

  ngOnInit(): void {
    this.title = 'Any Product Logger';
  }
}
