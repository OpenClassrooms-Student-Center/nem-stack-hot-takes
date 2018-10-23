import { Component, OnInit } from '@angular/core';
import { Sauce } from '../models/Sauce.model';
import { SaucesService } from '../services/sauces.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-single-sauce',
  templateUrl: './single-sauce.component.html',
  styleUrls: ['./single-sauce.component.scss']
})
export class SingleSauceComponent implements OnInit {

  loading: boolean;
  sauce: Sauce;
  userId: string;
  likePending: boolean;
  liked: boolean;
  disliked: boolean;

  constructor(private sauces: SaucesService,
              private route: ActivatedRoute,
              private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.loading = true;
    this.route.params.subscribe(
      (params) => {
        this.sauces.getSauceById(params.id).then(
          (sauce: Sauce) => {
            this.sauce = sauce;
            this.loading = false;
          }
        );
      }
    );
  }

  onLike() {
    if (this.disliked) {
      return 0;
    }
    this.likePending = true;
    this.sauces.likeSauce(this.sauce._id, !this.liked).then(
      (liked: boolean) => {
        this.likePending = false;
        this.liked = liked;
      }
    );
  }

  onDislike() {
    if (this.liked) {
      return 0;
    }
    this.likePending = true;
    this.sauces.dislikeSauce(this.sauce._id, !this.disliked).then(
      (disliked: boolean) => {
        this.likePending = false;
        this.disliked = disliked;
      }
    );
  }

}
