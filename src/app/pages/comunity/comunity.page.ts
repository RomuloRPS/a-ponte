import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.page.html',
  styleUrls: ['./comunity.page.scss'],
})
export class ComunityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCommunity() {
    this.router.navigate(['comunity-detail']);
  }

}
