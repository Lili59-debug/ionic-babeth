import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rayons',
  templateUrl: './rayons.page.html',
  styleUrls: ['./rayons.page.scss'],
})
export class RayonsPage implements OnInit {
  public rayons: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.rayons = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
