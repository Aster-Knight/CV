// src/app/services/nasa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para la respuesta de la API APOD
export interface ApodResponse {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string; // URL de la imagen en alta definición
  media_type: 'image' | 'video'; // La API puede devolver videos
  title: string;
  url: string; // URL de la imagen en definición estándar
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  // Reemplaza 'DEMO_KEY' con tu propia clave de API cuando puedas
  private readonly apiKey = 'LtaJt0MT8QsyllJgBgKLxOxCGxsNc7c21wduUHob';
  private readonly apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la Imagen Astronómica del Día de la NASA.
   */
  public getAstronomyPictureOfTheDay(): Observable<ApodResponse> {
    return this.http.get<ApodResponse>(this.apiUrl);
  }
}