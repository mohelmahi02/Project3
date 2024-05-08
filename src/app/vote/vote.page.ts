import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonRadioGroup,IonButtons,IonBackButton,IonList   } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonRadioGroup,IonButtons,IonBackButton,IonList]
})
export class VotePage  {
  genres: string[] = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];
  selectedGenres: string[] = [];
  showSelectedGenres: boolean = false;
  

  constructor() { }

  toggleGenre(genre: string) {
    if (this.selectedGenres.includes(genre)) {
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
    } else {
      this.selectedGenres.push(genre);
    }
  }
  submitVote() {
    this.showSelectedGenres = true; // Display selected genres
    console.log('Vote saved:', this.selectedGenres);
  }
}


  

  

  



