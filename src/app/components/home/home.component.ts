import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  uma = false;

  thumbnails = [
    { title: 'Prueba1', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta laborum tempore quo doloribus reiciendis totam, magni iusto ut quos velit eaque, aut perferendis quae optio recusandae architecto tempora nemo?', img: 'https://via.placeholder.com/365x200.png'  },
    { title: 'Prueba2', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta laborum tempore quo doloribus reiciendis totam, magni iusto ut quos velit eaque, aut perferendis quae optio recusandae architecto tempora nemo?', img: 'https://via.placeholder.com/365x200.png'  },
    { title: 'Prueba3', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta laborum tempore quo doloribus reiciendis totam, magni iusto ut quos velit eaque, aut perferendis quae optio recusandae architecto tempora nemo?', img: 'https://via.placeholder.com/365x200.png'  }
  ];
// metodos
  constructor() { }

  toggleCards() {
    this.uma = !this.uma;

  }

  saludos() {
    console.log('Hola mundo');
  }

  ngOnInit() {
  }

}
