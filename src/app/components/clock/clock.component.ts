import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TimeService } from 'src/app/services/time.service';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  stringVal: Promise<string>

  time: Observable<string>;

  constructor(private timeService: TimeService) { 
    this.time = timeService.getTime();
  }

  ngOnInit() {




  }

}
