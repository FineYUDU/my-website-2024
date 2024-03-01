// * Angular
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})


export class LocalStorageService {

    constructor() {}

    // * Get Mode
    get GetMode():string | null {
        let mode = localStorage.getItem('theme');
        return mode;
    }
    // * Get Lang
    get GetLang():string | null {
        let lang = localStorage.getItem('lang');
        return lang;
    }
}