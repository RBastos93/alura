import { Component, Input } from '@angular/core';

// ap = Alura pic

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})

export class PhotoComponent {
    @Input() url: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg';
    @Input()  description: string = 'Leão';
}