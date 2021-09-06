import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('#autoWidth,#autoWidth2').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        }
      });
    });
  }

}
