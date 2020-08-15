import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  regions: Array<any>;
  showSpinner = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.appService.getLocations().subscribe((data) => {
      this.regions = data;
      this.showSpinner = false;
    });
  }
}
