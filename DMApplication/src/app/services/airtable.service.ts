import { Injectable } from '@angular/core';
import { Airtable, Base, Table } from 'ngx-airtable';
import { Tables } from 'src/assets/enums/tables';

@Injectable({
  providedIn: 'root'
})
export class AirtableService {

  private _playerTbl: Table;
  
  constructor(private _airtable: Airtable) {
    const base: Base = _airtable.base('app8JsAkQhhNW0QN1');

    this._playerTbl = base.table({tableName: Tables.Player});
  }

  GetPlayerTable()
  {
    return this._playerTbl;
  }
}
