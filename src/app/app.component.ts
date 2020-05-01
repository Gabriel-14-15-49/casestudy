import { Component, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'casestudy';
  activatedRoute: any;
  name: any;
  router: any;
  values: number[] = [102, 115, 130, 137];

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
  
}
