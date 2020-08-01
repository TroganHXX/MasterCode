import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    private platform: any;
    private map: any;
    private router: any;

    public constructor() { }

    public ngOnInit() {
        this.platform = new H.service.Platform({
            "app_id": this.appId,
            "app_code": this.appCode
        });
        this.router = this.platform.getRoutingService();
    }

    public ngAfterViewInit() {
        setTimeout(() => {
            let defaultLayers = this.platform.createDefaultLayers();
            this.map = new H.Map(
                this.mapElement.nativeElement,
                defaultLayers.normal.map,
                {
                    zoom: 10,
                    center: { lat: this.lat, lng: this.lng }
                }
            );
            let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
        }, 100);
    }

    public isoline() {let params = {
      "mode": "fastest;car;traffic:enabled",
      "range": "300",
      "rangetype": "time",
      "departure": "now",
      "start": this.lat + "," + this.lng
  }
  this.map.removeObjects(this.map.getObjects());
  this.router.calculateIsoline(params, data => {
      if(data.response) {
          let center = new H.geo.Point(data.response.center.latitude, data.response.center.longitude),
              isolineCoords = data.response.isoline[0].component[0].shape,
              linestring = new H.geo.LineString(),
              isolinePolygon,
              isolineCenter;
          isolineCoords.forEach(coords => {
              linestring.pushLatLngAlt.apply(linestring, coords.split(','));
          });
          isolinePolygon = new H.map.Polygon(linestring);
          isolineCenter = new H.map.Marker(center);
          this.map.addObjects([isolineCenter, isolinePolygon]);
          this.map.setViewBounds(isolinePolygon.getBounds());
      }
  }, error => {
      console.error(error);
  }); }

}