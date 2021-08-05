import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forget-password-form',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {
    model: any = {}
    constructor() { }

    ngOnInit(): void {
        this.model.email = "quanganhtran2908@gmail.com"
    }

    onSendResetPasswork = () => {
        console.log(this.model);
    }


}
