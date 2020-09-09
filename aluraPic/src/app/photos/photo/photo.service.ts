import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PhotoService {
    API: string = environment.API;

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Object[]>(`${this.API}/flavio/photos`);
    }
}