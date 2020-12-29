import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    API: string = environment.API;

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(`${this.API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http.get<Photo[]>(`${this.API}/${userName}/photos`, { params });
    }
}