import { Injectable } from '@angular/core';
import { AirtableService } from './airtable.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _airtableService: AirtableService) {
  }

  async ValidatePlayerLogin(email: string, hashedPassword: string): Promise<boolean> {

    let final;
   let result: Observable<any[]> = this._airtableService.GetPlayerTable().select().all();
   result.subscribe(x => {
     x.filter(f => f.get('Email') == email && f.get('Password') == hashedPassword);
     final = x.length == 1;
   });
   //.subscribe(x => result = x.filter(x => x.get('Email') == email && x.get('Password') == hashedPassword));
   //result = Players.filter(x => x.get('Email') == email && x.get('Password') == hashedPassword).length == 1;

    return final;
  }
}
