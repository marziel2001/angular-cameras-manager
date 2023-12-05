// import {Component, OnInit} from '@angular/core';
// import {BrandForm} from "../../model/brand-form";
// import {BrandService} from "../../service/brand.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-brand-edit',
//   templateUrl: './brand-add.component.html',
//   styleUrls: ['./brand-add.component.css']
// })
// export class BrandAddComponent implements OnInit {
//
//   uuid: string | undefined;
//
//   brand: BrandForm | undefined = {};
//
//   original : BrandForm | undefined;
//
//   constructor(
//       private brandService: BrandService,
//       private route: ActivatedRoute,
//       private router: Router,
//   ) {
//   }
//   ngOnInit(): void {
//   }
//
//   onSubmit(): void {
//     this.brandService.putBrand(this.uuid!, this.brand!)
//         .subscribe(() => this.router.navigate(['/characters']));
//   }
//
// }
