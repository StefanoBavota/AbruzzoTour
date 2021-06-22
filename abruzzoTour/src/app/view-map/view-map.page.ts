import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.page.html',
  styleUrls: ['./view-map.page.scss'],
})
export class ViewMapPage implements OnInit {
  id: any;
  latitude: any;
  longitude: any;
  percorso: any;
  map = null;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.latitude = Number(param.latitude);
      this.longitude = Number(param.longitude);
    })
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: this.latitude, lng: this.longitude };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 11
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: this.latitude,
          lng: this.longitude
        },
        title: 'titolo'
      };
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
