import { withBase } from '../lib/paths';

export function Hero() {
  return (
    <header class="hero" id="topo">
      <div class="hero__media" aria-hidden="true">
        <img
          class="hero__image"
          src={withBase('destinations/hero.jpg')}
          alt=""
          width={2000}
          height={1384}
          fetchpriority="high"
        />
        <div class="hero__veil" />
      </div>

      <div class="hero__content">
        <p class="hero__brand">Nossa viagem</p>

        <div class="boarding" role="group" aria-label="Cartão de embarque">
          <div class="boarding__top">
            <span class="boarding__label">Passageiros</span>
            <strong class="boarding__names">Antoniô</strong>
          </div>

          <div class="boarding__row">
            <div>
              <span class="boarding__label">Destino</span>
              <strong class="boarding__value">Tailândia · Bali</strong>
            </div>
            <div class="boarding__dates">
              <span class="boarding__label">Datas</span>
              <strong class="boarding__value">25 jan – 17 fev</strong>
            </div>
          </div>

          <p class="boarding__note">Um convite pra atravessar o mapa juntos.</p>
        </div>

        <a class="hero__scroll" href="#bangkok">
          Descer o roteiro
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
