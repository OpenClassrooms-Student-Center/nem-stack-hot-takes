import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sauce } from '../models/Sauce.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaucesService {

  sauces$ = new Subject<Sauce[]>();

  tempSauces = [
    {
      _id: 'eizomfhazo',
      name: 'The Last Dab',
      manufacturer: 'Heatonist',
      description: 'Mind-blowingly hot!',
      heat: 10,
      likeScore: 100,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LAstdabReduxx_1024x1024-1_1024x1024.jpg?v=1527778720',
      mainPepper: 'Pepper X'
    },
    {
      _id: 'eizomfhazo',
      name: 'Los Calientes',
      manufacturer: 'Heatonist',
      description: 'Nummy nummy nummy',
      heat: 5,
      likeScore: 100,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LOS_CALIENTES1_1024x1024.jpg?v=1527709467',
      mainPepper: 'Serrano'
    },
    {
      _id: 'eizomfhazo',
      name: 'Black Garlic',
      manufacturer: 'Bravado Spice Company',
      description: 'Still pretty freakin\’ hot',
      heat: 6,
      likeScore: 100,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/bravado-blackgarlichotsauce_1024x1024.jpg?v=1527270029',
      mainPepper: 'Carolina Reaper'
    },
    {
      _id: 'eizomfhazo',
      name: 'Smoked Onion',
      manufacturer: 'Butterfly Bakery',
      description: 'Mind-blowingly hot!',
      heat: 3,
      likeScore: 100,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/smokedonion1_1024x1024_copy_1024x1024.jpg?v=1538413599',
      mainPepper: 'Jalapeños'
    },
    {
      _id: 'eizomfhazo',
      name: 'Blair\'s Ultra Death Sauce',
      manufacturer: 'Blair\'s',
      description: 'Even more mind-blowingly hot, and not very tasty',
      heat: 9,
      likeScore: 100,
      imageUrl: 'https://www.chilliworld.com/content/images/thumbs/0000827_blairs-ultra-death-sauce-in-a-coffin_550.jpeg',
      mainPepper: 'Carolina Reaper'
    }
  ];

  constructor(private http: HttpClient) {}

  getSauces() {
    this.sauces$.next(this.tempSauces);
  }

  getSauceById(id: string) {
    return this.tempSauces[0];
  }

  createSauce(sauce: Sauce) {
    // TODO: POST sauce to backend
  }

  modifySauce(id: string, sauce: Sauce) {
    // TODO: PUT sauce to backend
  }

  deleteSauce(id: string) {
    // TODO: DELETE sauce from backend
  }
}
