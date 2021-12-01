import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testCountries';

  loading: boolean = true;

  cols: any[];

  totalRecords: number;


  constructor( private countriesService: CountriesService) { }
  countries:any;

  ngOnInit(): void {

    this.cols = [{field: 'name.official', header: 'País'}, {field: 'capital', header: 'Capital'}, {field: 'population', header: 'Población'}];
    this.totalRecords=this.cols.length;

    this.countriesService.getCountries( )
    .subscribe( (resCountries: any) => {
      this.countries = resCountries;
      this.loading = false;

      console.log(resCountries);
    }, error => console.error(error));
  }
}
