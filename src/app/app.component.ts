import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';
import { Test } from './models/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.testItem);
  }
  testItem: Test;
  constructor(
    private testService: TestService){
      const data = testService.getTestByName('ewerwe');
      data.subscribe((value: Test) => {
        this.testItem = value;
        console.log(this.testItem);
      });
  }

}
