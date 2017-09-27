import { Injectable } from "@angular/core";
import { RequestOptions, Request, RequestMethod, Headers, Http, URLSearchParams, ResponseContentType } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { environment } from "../../environments/environment";
import { Response } from "./response";

@Injectable()
export class Connector {

    private jsonHeader = new Headers({"Content-Type": "application/json"});
    private baseUrl: string = environment.apiUrl;

    constructor(private http: Http) {}

    private errorHandler(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    private responseHandler<ResponseDataType>(response: Response): ResponseDataType {
        if (response.status === 200) {
            return response.data;
        } else {
            // TODO exception
        }
    }

    get<ResponseDataType>(url: string, params?: any): Promise<ResponseDataType> {
        let urlParams: URLSearchParams;
        if (params) {
            urlParams = new URLSearchParams();
            for (let key in params) {
                if (key === undefined) continue;
                urlParams.set(key, params[key]);
            }
        }
        let opt = new RequestOptions({
            method: RequestMethod.Get,
            url: this.baseUrl + url,
            search: urlParams,
            responseType: ResponseContentType.Json
        });
        return this.http.request(new Request(opt))
               .toPromise()
               .then(response => this.responseHandler<ResponseDataType>(response.json() as Response))
               .catch(this.errorHandler);
    }

    post<ResponseDataType>(url: string, params?: any): Promise<ResponseDataType> {
        let opt = new RequestOptions({
            method: RequestMethod.Post,
            url: this.baseUrl + url,
            headers: this.jsonHeader,
            body: JSON.stringify(params),
            responseType: ResponseContentType.Json
        });
        return this.http.request(new Request(opt))
               .toPromise()
               .then(response => this.responseHandler<ResponseDataType>(response.json() as Response))
               .catch(this.errorHandler);
    }

    put<ResponseDataType>(url: string, params?: any): Promise<ResponseDataType> {
        let opt = new RequestOptions({
            method: RequestMethod.Put,
            url: this.baseUrl + url,
            headers: this.jsonHeader,
            body: JSON.stringify(params),
            responseType: ResponseContentType.Json
        });
        return this.http.request(new Request(opt))
               .toPromise()
               .then(response => this.responseHandler<ResponseDataType>(response.json() as Response))
               .catch(this.errorHandler);
    }

    delete<ResponseDataType>(url: string, params?: any): Promise<ResponseDataType> {
        let urlParams: URLSearchParams;
        if (params) {
            urlParams = new URLSearchParams();
            for (let key in params) {
                if (key === undefined) continue;
                urlParams.set(key, params[key]);
            }
        }
        let opt = new RequestOptions({
            method: RequestMethod.Delete,
            url: this.baseUrl + url,
            search: urlParams,
            responseType: ResponseContentType.Json
        });
        return this.http.request(new Request(opt))
               .toPromise()
               .then(response => this.responseHandler<ResponseDataType>(response.json() as Response))
               .catch(this.errorHandler);
    }

}
