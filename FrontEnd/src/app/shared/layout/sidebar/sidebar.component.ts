import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesLink } from '../../../consts/routes';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    listRoute = RoutesLink;

    constructor(
        public router: Router
    ) { }

    ngOnInit() { }
}
