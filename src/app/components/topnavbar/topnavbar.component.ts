import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.scss'],
})
export class Topnavbar {
    ngOnInit() {

    }
    toggleNavigation(): void {
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
    }
}