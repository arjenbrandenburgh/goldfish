import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { environment } from './../environments/environment';

@Injectable()
export class Configuration {

    constructor() { }

    public shuffle(a): void {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
}
