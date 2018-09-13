import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public users: Array<any> = [
        {
            name: 'Jack',
            open: false
        },
        {
            name: 'Mike',
            open: true
        },
        {
            name: 'Jesica',
            open: true
        },
        {
            name: 'Monika',
            open: false
        }
    ]

    public remove(userIndex): void {
        this.users.splice(userIndex, 1);
    }

}
