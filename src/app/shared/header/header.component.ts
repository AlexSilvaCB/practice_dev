import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

  }

  //Logica botão menu com temporizador para fechar
  menuToggle = () =>{
    const btn = document.querySelector('.menu-icon')
    const menu = document.querySelector('.menu')

      //btn?.addEventListener('click', ()=>{})

       if(!btn?.classList.contains('paused'))
        {
          btn?.classList.add('paused')
          menu?.classList.add('paused')
          this.classToggle()
        }
        else
        {
          this.classToggle()
        }

        setTimeout(() => {
          this.classToggle()
        }, 30000);}

  classToggle = ()=>{
    const menuIcon = document.querySelectorAll('[data-menu]')

      menuIcon.forEach((e)=>{
        if(e.classList.contains('paused'))
        {
          e.classList.remove('paused')
          e.classList.add('active')
        }else{
          e.classList.remove('active')
        }})}



      }
