import { Component, OnInit } from '@angular/core';
// import {} from '@googlemaps/js-api-loader';
import { MapsAPILoader, Marker } from '@agm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {


  mapType : string = 'satellite';
  public zoom: any;
  public latitude: any
  public longitude: any 
  markers: any[] = [
    { lat: 51.5074, lng: -0.1278, title: 'London' },
    { lat: 40.7128, lng: -74.0060, title: 'New York' },
    { lat: -33.8688, lng: 151.2093, title: 'Sydney' }
  ];
  public latlong: any = {};


  constructor(private mapApiLoader: MapsAPILoader) { }

  ngOnInit(): void {
    this.zoom=2
    // this.mapApiLoader.load().then(() => {
    //   this.setCurrntposition()
    //   // this.geoCoder = new google.maps.Geocoder;
    // })
   }

  //  public setCurrntposition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude
  //       this.longitude = position.coords.longitude
  //       this.zoom = 8
  //     })
  //   }
  // }

}
