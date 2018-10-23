import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sauce } from '../models/Sauce.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

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
      likes: 100,
      dislikes: 0,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LAstdabReduxx_1024x1024-1_1024x1024.jpg?v=1527778720',
      mainPepper: 'Pepper X',
      usersLiked: [],
      usersDisliked: []
    },
    {
      _id: 'oimhoiohmhoih',
      name: 'Los Calientes',
      manufacturer: 'Heatonist',
      description: 'Nummy nummy nummy',
      heat: 5,
      likes: 100,
      dislikes: 0,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/LOS_CALIENTES1_1024x1024.jpg?v=1527709467',
      mainPepper: 'Serrano',
      usersLiked: [],
      usersDisliked: []
    },
    {
      _id: 'oimjoijlhui',
      name: 'Black Garlic',
      manufacturer: 'Bravado Spice Company',
      description: 'Still pretty freakin\’ hot',
      heat: 6,
      likes: 100,
      dislikes: 0,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/bravado-blackgarlichotsauce_1024x1024.jpg?v=1527270029',
      mainPepper: 'Carolina Reaper',
      usersLiked: [],
      usersDisliked: []
    },
    {
      _id: 'sildjhv',
      name: 'Smoked Onion',
      manufacturer: 'Butterfly Bakery',
      description: 'Mind-blowingly hot!',
      heat: 3,
      likes: 100,
      dislikes: 0,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2086/9287/products/smokedonion1_1024x1024_copy_1024x1024.jpg?v=1538413599',
      mainPepper: 'Jalapeños',
      usersLiked: [],
      usersDisliked: []
    },
    {
      _id: 'eroimfgjlfh',
      name: 'Blair\'s Ultra Death Sauce',
      manufacturer: 'Blair\'s',
      description: 'Even more mind-blowingly hot, and not very tasty',
      heat: 9,
      likes: 100,
      dislikes: 0,
      imageUrl: 'https://www.chilliworld.com/content/images/thumbs/0000827_blairs-ultra-death-sauce-in-a-coffin_550.jpeg',
      mainPepper: 'Carolina Reaper',
      usersLiked: [],
      usersDisliked: []
    }
  ];

  constructor(private http: HttpClient,
              private auth: AuthService) {}

  getSauces() {
    this.sauces$.next(this.tempSauces);
  }

  getSauceById(id: string) {
    return new Promise((resolve, reject) => {
      resolve(this.tempSauces.find((sauce) => sauce._id === id));
    });
  }

  likeSauce(id: string, like: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(like);
        }, 500
      );
    });
  }

  dislikeSauce(id: string, like: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(like);
        }, 500
      );
    });
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
