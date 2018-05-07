import { InjectionToken } from "@angular/core";

export class UserDetails {
    name: string;
    password: String;
}


export class PostDetaisl { 
        id: string;
        userId: string;
        body: string;
        title: string;
}

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
