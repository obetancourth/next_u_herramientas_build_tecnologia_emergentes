import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CartService } from '../api/cart.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  public prod: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( params => {
        console.log(params.get('id'));
        return this.cart.getProductById(params.get('id'));
      })
    ).subscribe(
      (res) => {
        this.prod = res;
        console.log(this.prod);
      }
    );
  }

  cancel() {
    this.router.navigate(['/main']);
  }
}
