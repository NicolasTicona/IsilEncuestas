import { Injectable } from '@angular/core';

@Injectable()
export class DocenteService {

  constructor() { }

  docenteData:any= [
    {      
      nombre: 'Mauricio Peña Nieto',
      edad: 43,
      email: 'mauricio@gmail.com',
      cursos: ['Marketing', 'Programacion', 'Videojuegos'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 1,
    },
    {
      nombre: 'Jorge Santanilla',
      edad: 25,
      email: 'jorge@gmail.com',
      cursos: ['Ciencias', 'Programacion'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 2,
    },
    {
      nombre: 'Laura Martinez Peredo',
      edad: 33,
      email: 'laura@gmail.com',
      cursos: ['Contabilidad', 'Marketing', 'Gestion'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 3,
    },
    {
      nombre: 'Diego Mauricio Apaza',
      edad: 25,
      email: 'mauricio@gmail.com',
      cursos: ['Ingles', 'Historia', 'Programacion'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 4,
    },
    {
      nombre: 'Jimena Rossana Campos',
      edad: 28,
      email: 'jimena@gmail.com',
      cursos: ['Arquitectura', 'Sociales'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 5,
    },    
    {
      nombre: 'Lucia Rossana Campos',
      edad: 42,
      email: 'lucia@gmail.com',
      cursos: ['Arquitectura', 'Sociales'],
      foto: '../../assets/user.png',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis mi dui, sit amet rhoncus tellus condimentum et. Aliquam blandit turpis et nisi finibus, id imperdiet justo faucibus. Nunc pellentesque justo ut justo malesuada, vitae suscipit lorem sodales. Etiam quis dolor consequat, gravida arcu eu, dictum felis.',
      id: 6,
    }
  ]

  GetData(){
    return this.docenteData;
  }

}
