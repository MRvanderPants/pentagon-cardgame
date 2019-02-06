import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getSVG (aUrl: string): Promise <any> {

    return new Promise ((resolve) => {
      this.http.get(aUrl)
        .subscribe(
          data => resolve(data),
          error => resolve(error.error.text)
        );
    });
  }
}
