import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  
  i = 0;
  // public lista = [{}];
  public showVar = true;
  constructor() { }

  ngOnInit(): void {
    
  }

  changeHeart(){
    this.showVar = !this.showVar
    // const heart = (document.getElementById('heart') as HTMLImageElement);

    // if ( this.i % 2 == 0){
    //   heart.src = 'assets/heart2.svg';
    // }
    // else{
    //   heart.src = 'assets/heart.svg';
    // }
    // this.i++;
  }
}
