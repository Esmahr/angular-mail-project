import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<body>
  <div class="container">
    <div class="row d-flex justify-content-center pt-5">
      <div class="col-12 col-lg-6 ps-0 pe-0">
        <div class="card">
          <div class="title pt-4 mt-5 mb-5">
            <h1>Mail.Co'ya Hoş Geldiniz</h1>
          </div>
          <div class="division">
            <div class="row w-100">
              <div class="col-3">
                <div class="line l"></div>
              </div>
              <div class="col-6"><span class="ps-1 pe-1">Giriş Yap</span></div>
              <div class="col-3">
                <div class="line r"></div>
              </div>
            </div>
          </div>
          <form class="myform mt-4">
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Mail">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Şifre"  autocomplete="new-password">
                </div>
              </div>
              
            </div>
            <div class=" more mt-3">
              <div class="form-group form-check mb-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label pt-1" for="exampleCheck1">Giriş Bilgilerimi Kaydet</label>
              </div>
              <div class="login pt-1">Hesabın yok mu? <a class="text-black"  routerLink="/register">Üye Ol</a></div>
            </div>
            <div class="form-group mt-2 mb-4">
              <button type="button" class="btn btn-block btn-primary btn-lg">Giriş Yap</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-lg-6 bg-white text-center pt-5"><img style="width: 70%; padding-top: 3rem;"
          src="../../../assets/signup.jpg" alt=""></div>
    </div>
  </div>
</body>`,
  styleUrl: '../register/register.component.scss'
})
export class LoginComponent {

}
