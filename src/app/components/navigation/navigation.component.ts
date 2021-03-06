/**
 * Created by andrew.yang on 2/6/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'poldoc-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    constructor( private router: Router) { }

    ngOnInit() { }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
