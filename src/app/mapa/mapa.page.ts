import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { ToastController } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('gmap') mapElement!: ElementRef;
  map: any;
  loader!: Loader;
  enderecos: string[] = [];
  waypoints: google.maps.DirectionsWaypoint[] = [];
  coordinates!: Position;
  destination: string = '';

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const state = history.state;
      if (state) {
        this.enderecos = state.enderecos;
        this.enderecos.forEach((endereco, index) => {
          if (index < this.enderecos.length - 1) {
            this.waypoints.push({
              location: endereco,
              stopover: true,
            });
          } else {
            this.destination = endereco;
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    const currentPosition = async () => {
      this.coordinates = await Geolocation.getCurrentPosition();
      this.initMap();
    };

    currentPosition();
  }

  initMap() {
    this.loader = new Loader({
      apiKey: 'AIzaSyD9yWSyBhbOtQt-ybgQSSKJnuTVJGBfKEs',
      version: 'weekly',
    });
    const mapOptions = {
      center: {
        lat: this.coordinates.coords.latitude,
        lng: this.coordinates.coords.longitude,
      },
      zoom: 8,
    };
    const elementMap: HTMLElement = this.mapElement.nativeElement;

    this.loader
      .importLibrary('maps')
      .then(({ Map }) => {
        const directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new Map(elementMap, mapOptions);

        directionsRenderer.setMap(map);

        directionsRenderer.setPanel(
          document.getElementById('directions-panel')
        );

        directionsService.route(
          {
            origin: {
              lat: this.coordinates.coords.latitude,
              lng: this.coordinates.coords.longitude,
            },
            destination: this.destination,
            travelMode: google.maps.TravelMode.WALKING,
            waypoints: this.waypoints,
          },
          function (result, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);

              const route = result!.routes[0];
              let totalDistance = 0;
              let totalDuration = 0;
              route.legs.forEach((leg) => {
                totalDistance += leg.distance!.value;
                totalDuration += leg.duration!.value;
              });

              const distance = (totalDistance / 1000).toFixed(2);
              let duration: string;
              if (totalDuration >= 3600) {
                // Se for mais de uma hora
                const hours = Math.floor(totalDuration / 3600); // Horas
                const minutes = Math.floor((totalDuration % 3600) / 60); // Minutos
                duration = `${hours} h ${minutes} min`;
              } else {
                // Menos de uma hora
                const minutes = (totalDuration / 60).toFixed(0); // Minutos
                duration = `${minutes} min`;
              }

              document.getElementById('distance')!.textContent =
                distance + ' km(s)';
              document.getElementById('duration')!.textContent = duration;
            }
          }
        );
      })
      .catch((e) => {
        this.presentErrorToast();
      });
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Erro ao carregar sua rota',
      duration: 3000,
      position: 'middle',
      color: 'danger',
    });
    toast.present();
  }
}
