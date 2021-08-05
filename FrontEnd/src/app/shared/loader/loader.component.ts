import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  color = 'accent';
  mode = 'indeterminate';
  value = 50;

  constructor(public loadingService: LoaderService) { }

}