import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Rpg } from '../model/rpg';

@Injectable({
  providedIn: 'root'
})
export class RpgService {

  private readonly API = 'api/rpgs'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Rpg[]>(this.API).pipe(
      first()
    )
  }
}
