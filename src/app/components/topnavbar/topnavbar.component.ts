import { Component } from '@angular/core';
import {smoothlyMenu} from '../../app.helpers';

@Component({
    selector: 'poldoc-topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.scss'],
})
export class TopnavbarComponent {
    toggleNavigation(): void {
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
    }
}
