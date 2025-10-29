import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ApodResponse {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string; 
  media_type: 'image' | 'video'; 
  title: string;
  url: string; 
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  
  private readonly apiKey = 'LtaJt0MT8QsyllJgBgKLxOxCGxsNc7c21wduUHob';
  private readonly apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  
  public getAstronomyPictureOfTheDay(): Observable<ApodResponse> {
    return this.http.get<ApodResponse>(this.apiUrl);
  }
}
