import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorService } from './../author/author.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private usersUB: Subscription;
  isAuthenticated = false;

  constructor(private datass: DataStorageService,
     private authSer: AuthorService,
     private router: Router) { }
  ngOnInit(){
   this.usersUB = this.authSer.user.subscribe(user=>{
    this.isAuthenticated = !user ? false : true;
    })
  }

  onSaveData() {
    this.datass.onStorageData()
  }
  onLogOut(){
    this.authSer.logout()
    this.router.navigate(['/author'])
  }

  onFetchData() {
    this.datass.onFetchData()
  }
  ngOnDestroy(): void {
    this.usersUB.unsubscribe();
  }
  
}
