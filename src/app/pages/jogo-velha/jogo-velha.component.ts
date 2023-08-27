import { Component, OnInit, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.scss']
})
export class JogoVelhaComponent implements OnInit {

  celulas: string[] = []
  winner:boolean = false
  empate: string = ''
  cont:number = 0
  xIsNext: boolean = true
  classFadeIn:string = 'fadeIn'

  constructor( private Renderer2: Renderer2 ){ }

  ngOnInit(): void { }

  newGame(){
    this.celulas = Array(9).fill(null);

    setTimeout(() => { this.classFadeIn = 'fadeOff'}, 1500);
}

winnerCombination():any{
  const lines: number[][] = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(this.celulas[a] &&
       this.celulas[a] === this.celulas[b] &&
       this.celulas[a] === this.celulas[c])
       {
      return this.celulas[a]
    }
  }
  return console.log('null')
}

  get player(){
    return this.xIsNext ? 'X' :'O'
}

  makeMove(idx: number){
    if(!this.celulas[idx])
    {
      this.celulas.splice(idx, 1, this.player)
      this.xIsNext = !this.xIsNext

      this.cont = this.cont + 1
      if(this.cont == 9){
        this.empate = 'EMPATE!'
        this.winner = true
      }
    }

    if(this.winnerCombination() != null){
      this.winner = true
      console.log(this.winner)
    }
}

reset(){
  this.celulas = []
  this.winner = false
  this.empate = ''
  this.cont = 0
  this.xIsNext= true
  this.classFadeIn = 'fadeIn'
}
}
