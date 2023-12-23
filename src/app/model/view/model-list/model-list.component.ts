import {Component, Input} from '@angular/core';
import {ModelService} from "../../service/model.service";
import {Models} from "../../model/models";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent {

  constructor(private service: ModelService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  models: Models | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.service.getBrandsModels(params['uuid'])
            .subscribe(models => this.models = models);
    })
    }

    protected readonly AppComponent = AppComponent;
}
