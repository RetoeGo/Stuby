import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


import { AuthService } from './auth.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  credentialForm: FormGroup;
  //isLoading = false;
  isLogin = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.credentialForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.authService.signup(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/chat', {replaceUrl: true});
    }, async err => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Sign up failed',
        message: err.message,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }

  async signIn(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.authService.signIn(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/chat', {replaceUrl: true});
    }, async err => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Sign in failed',
        message: err.message,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }


  /*
  async authenticate(email: string, password: string){
    this.authService.login();
    this.isLoading= true;
    this.loadingCtrl
    .create({ keyboardClose: true, message: 'Logging in...'})
    .then(loadingEl => {
      loadingEl.present();
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading= false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, errRes => {
        loadingEl.dismiss();
        alert(errRes.message);
      });
    });
  }
*/
/*
  onSubmit(form: NgForm){
    console.log(form);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    this.authenticate(email, password);
  }
*/
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
/*
  private showAlert(message: string){
    this.alertCtrl.create({header: 'Authentication failed', message, buttons: ['Okay'] }).then(alertEl => alertEl.present());
  }
*/
  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }

}
