import { Injectable } from '@angular/core';
import { GtmService } from './gtm.service';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {
  private gtmService: GtmService = new GtmService();
  private window: any = this.gtmService.nativeWindow;
  constructor(private _windowRef: GtmService) {
    this.window = this._windowRef.nativeWindow;
  }

  private pingHome(obj: any) {
    if (obj)
      this.window.dataLayer.push(obj);
  }

  logPaweView(url:string){
    const hit = {
      event: 'page_view',
      page_url: url
    };
    this.pingHome(hit);
  }

  logEvent(event:any, category:any, action:any, label:any){
    const hit = {
      event: event,
      category: category,
      action: action,
      label: label
    };
    this.pingHome(hit);
  }

  logCustomDimensionTest(value:any){
    const hit = {
      event: 'custom-dimension',
      value: value
    };
    this.pingHome(hit);
  }


}
