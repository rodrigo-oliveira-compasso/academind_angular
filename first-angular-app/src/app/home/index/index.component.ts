import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { UserComponent } from "../../user/user.component";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
    imports: [HeaderComponent, UserComponent]
})
export class IndexComponent {

}
