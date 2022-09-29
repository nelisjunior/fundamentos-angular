import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = 'João';

}


// export class SegundoComponenteComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
