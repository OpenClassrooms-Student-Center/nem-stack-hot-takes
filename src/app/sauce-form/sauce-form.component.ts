import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaucesService } from '../services/sauces.service';
import { Sauce } from '../models/Sauce.model';

@Component({
  selector: 'app-sauce-form',
  templateUrl: './sauce-form.component.html',
  styleUrls: ['./sauce-form.component.scss']
})
export class SauceFormComponent implements OnInit {

  sauceForm: FormGroup;
  mode: string;
  loading: boolean;
  sauce: Sauce;
  errorMsg: string;
  imagePreview: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private sauces: SaucesService) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(
      (params) => {
        if (!params.id) {
          this.mode = 'new';
          this.initEmptyForm();
          this.loading = false;
        } else {
          this.mode = 'edit';
          this.sauces.getSauceById(params.id).then(
            (sauce: Sauce) => {
              this.sauce = sauce;
              this.initModifyForm(sauce);
              this.loading = false;
            }
          ).catch(
            (error) => {
              this.errorMsg = JSON.stringify(error);
            }
          );
        }
      }
    );
  }

  initEmptyForm() {
    this.sauceForm = this.formBuilder.group({
      name: [null, Validators.required],
      manufacturer: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
      mainPepper: [null, Validators.required],
      heat: [1, Validators.required],
      heatValue: [{value: 1, disabled: true}]
    });
    this.sauceForm.get('heat').valueChanges.subscribe(
      (value) => {
        this.sauceForm.get('heatValue').setValue(value);
      }
    );
  }

  initModifyForm(sauce: Sauce) {
    this.sauceForm = this.formBuilder.group({
      name: [this.sauce.name, Validators.required],
      manufacturer: [this.sauce.manufacturer, Validators.required],
      description: [this.sauce.description, Validators.required],
      image: [null, Validators.required],
      mainPepper: [this.sauce.mainPepper, Validators.required],
      heat: [this.sauce.heat, Validators.required],
      heatValue: [{value: this.sauce.heat, disabled: true}]
    });
    this.sauceForm.get('heat').valueChanges.subscribe(
      (value) => {
        this.sauceForm.get('heatValue').setValue(value);
      }
    );
  }

  onSubmit() {
    const newSauce = new Sauce();
    newSauce.name = this.sauceForm.get('name').value;
    newSauce.manufacturer = this.sauceForm.get('manufacturer').value;
    newSauce.description = this.sauceForm.get('description').value;
    newSauce.mainPepper = this.sauceForm.get('mainPepper').value;
    newSauce.heat = this.sauceForm.get('heat').value;
    if (this.mode === 'new') {
      const formData = new FormData();
      formData.append('sauce', JSON.stringify(newSauce));
    } else if (this.mode === 'edit') {

    }
  }

  onFileAdded(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.sauceForm.get('image').setValue(file);
    this.sauceForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
