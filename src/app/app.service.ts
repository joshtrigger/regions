import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get<any>(
      "https://ipg-integrations-develop.azurewebsites.net/api/PaymentHelper/locations"
    );
  }
}
