import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  jikanAPiPath = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) { }
}
