import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `<main class="pb-5">
  <nav class="navbar navbar-expand-lg ms-5 me-5 pe-5 ps-5">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Anasayfa</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Hakkımızda</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Dokümantasyon</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">İletişim</a>
                  </li>
              </ul>
              <button class="btn me-2 login">Giriş Yap</button>
              <button class="btn register">Üye Ol</button>
          </div>
      </div>
  </nav>
  <div class="container">

      <div class="row landing-row">
          <div class="col-12 col-md-6">
              <span class="info">Tüm Maillerin Tek Yerde</span>
              <h1>Mail Yönetim <br> Platformu</h1>
              <p>Tüm maillerinizi tek bir panelden yönetin, zamandan tasarruf edin.</p>
              <button class="btn pricing">Paketleri İncele</button>
          </div>
          <div class="col-md-6">a</div>
      </div>

      <section class="advantages row justify-content-center pb-5">
          <div class="section-title text-center mb-4">
              <span class="info-title">Hizmetlerimiz</span>
              <hr
                  style="width: 2rem;height: 3px; margin-left: auto; margin-right: auto; color: rgb(189, 0, 31);background-color: rgb(189, 0, 31);margin-top: .3rem;">
              <h2 class="mt-3">Tüm Maillerinizi Tek Bir Yerden Yönetin</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mt-3">
              <div class="card">
                  <div class="card-title d-flex mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>

              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mt-3">
              <div class="card">
                  <div class="card-title d-flex  mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services2.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>

              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mt-3">
              <div class="card">
                  <div class="card-title d-flex  mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services3.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mt-3">
              <div class="card">
                  <div class="card-title d-flex  mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel,
                  </div>
              </div>
          </div>
      </section>

      <section class="about-us row mt-5 pt-5 mb-5">
          <div class="col-1"></div>
          <div class="col-12 col-md-5 mt-2"><img style="border-radius: 50rem;" src="../../../assets/signup.jpg"
                  alt=""></div>
          <div class="col-12 col-md-5 mt-2">
              <span class="info-title">About us</span>
              <h2 class="about-title mt-3 mb-3">We Create a Steps to Build a Successful Digital Product</h2>
              <p>With over 50 years of combined experience, our mission is to design with your values and vision in
                  mind. We’re out to create purposeful spaces that balance art and creativity with science and
                  strategy.
                  <br><br>
                  We’re out to create purposeful spaces that balance art and creativity with science and strategy.
              </p>
          </div>
      </section>

      <section class="pricing-section row justify-content-center mt-5 pt-5">
          <div class="sevtion-title text-center mb-4">
              <span class="info-title">Hizmetlerimiz</span>
              <hr
                  style="width: 2rem;height: 3px; margin-left: auto; margin-right: auto; color: rgb(189, 0, 31);background-color: rgb(189, 0, 31);margin-top: .3rem;">
              <h2 class="mt-3">Tüm Maillerinizi Tek Bir Yerden Yönetin</h2>
          </div>
          <div class="col-12 col-md-4 mt-3">
              <div class="card">
                  <div class="card-title d-flex mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>

              </div>
          </div>
          <div class="col-12 col-md-4  mt-3">
              <div class="card">
                  <div class="card-title d-flex mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services2.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>

              </div>
          </div>
          <div class="col-12 col-md-4 mt-3">
              <div class="card">
                  <div class="card-title d-flex mb-4">
                      <img src="https://preview.colorlib.com/theme/calvino/assets/img/icon/services3.svg" alt="">
                      <h5>Lorem ipsum dolor</h5>
                  </div>
                  <div class="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum pariatur
                      eaque id consequatur sapiente voluptatibus. Vel, aperiam
                  </div>
              </div>
          </div>
      </section>
  </div>
</main>`,
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
