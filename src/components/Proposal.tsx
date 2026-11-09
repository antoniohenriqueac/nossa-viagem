import { useEffect, useRef, useState } from 'preact/hooks';
import { withBase } from '../lib/paths';
import { Confetti } from './Confetti';
import { Reveal } from './Reveal';

export function Proposal() {
  const [answeredYes, setAnsweredYes] = useState(false);
  const noRef = useRef<HTMLButtonElement>(null);
  const arenaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answeredYes) return;
    const btn = noRef.current;
    const arena = arenaRef.current;
    if (!btn || !arena) return;

    const placeAway = (clientX: number, clientY: number) => {
      const arenaRect = arena.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const pad = 8;
      const maxX = Math.max(pad, arenaRect.width - btnRect.width - pad);
      const maxY = Math.max(pad, arenaRect.height - btnRect.height - pad);

      const cx = btnRect.left + btnRect.width / 2;
      const cy = btnRect.top + btnRect.height / 2;
      let dx = cx - clientX;
      let dy = cy - clientY;
      const dist = Math.hypot(dx, dy) || 1;
      dx /= dist;
      dy /= dist;

      let nextX = btnRect.left - arenaRect.left + dx * 140;
      let nextY = btnRect.top - arenaRect.top + dy * 110;

      nextX = Math.min(Math.max(pad, nextX), maxX);
      nextY = Math.min(Math.max(pad, nextY), maxY);

      const nx = arenaRect.left + nextX + btnRect.width / 2;
      const ny = arenaRect.top + nextY + btnRect.height / 2;
      if (Math.hypot(nx - clientX, ny - clientY) < 100) {
        const corners = [
          { x: pad, y: pad },
          { x: maxX, y: pad },
          { x: pad, y: maxY },
          { x: maxX, y: maxY },
        ];
        let best = corners[0];
        let bestDist = -1;
        for (const c of corners) {
          const d = Math.hypot(
            arenaRect.left + c.x + btnRect.width / 2 - clientX,
            arenaRect.top + c.y + btnRect.height / 2 - clientY,
          );
          if (d > bestDist) {
            bestDist = d;
            best = c;
          }
        }
        nextX = best.x;
        nextY = best.y;
      }

      btn.style.left = `${nextX}px`;
      btn.style.top = `${nextY}px`;
    };

    // Start No in the arena (not next to Yes)
    btn.style.position = 'absolute';
    btn.style.left = '50%';
    btn.style.top = '50%';
    btn.style.transform = 'translate(-50%, -50%)';
    requestAnimationFrame(() => {
      const arenaRect = arena.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      btn.style.transform = 'none';
      btn.style.left = `${Math.max(8, (arenaRect.width - btnRect.width) / 2)}px`;
      btn.style.top = `${Math.max(8, (arenaRect.height - btnRect.height) / 2)}px`;
    });

    const near = (x: number, y: number, margin: number) => {
      const rect = btn.getBoundingClientRect();
      return (
        x > rect.left - margin &&
        x < rect.right + margin &&
        y > rect.top - margin &&
        y < rect.bottom + margin
      );
    };

    const onPointerMove = (e: PointerEvent) => {
      if (near(e.clientX, e.clientY, 64)) placeAway(e.clientX, e.clientY);
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      if (near(t.clientX, t.clientY, 80)) {
        e.preventDefault();
        placeAway(t.clientX, t.clientY);
      }
    };

    arena.addEventListener('pointermove', onPointerMove);
    arena.addEventListener('touchstart', onTouch, { passive: false });
    arena.addEventListener('touchmove', onTouch, { passive: false });

    return () => {
      arena.removeEventListener('pointermove', onPointerMove);
      arena.removeEventListener('touchstart', onTouch);
      arena.removeEventListener('touchmove', onTouch);
    };
  }, [answeredYes]);

  return (
    <section class="proposal" id="destino-secreto" aria-labelledby="proposal-title">
      <Confetti active={answeredYes} />

      <Reveal className="proposal__intro">
        <p class="proposal__kicker">Último capítulo</p>
        <h2 id="proposal-title" class="proposal__title">
          Um destino que não está no mapa
        </h2>
      </Reveal>

      <div class="proposal__photo">
        <img
          src={withBase('photos/nos.jpg')}
          alt="Tay e Antoniô"
          width={1200}
          height={1500}
          loading="lazy"
          decoding="async"
        />
      </div>

      <Reveal className="proposal__letter" delay={100}>
        <p>Tay,</p>
        <p>
          A gente tem uma viagem linda pela frente — templos, mar, Bali, dias que eu já fico
          feliz só de imaginar ao seu lado. Mas tem um destino que eu quero começar antes mesmo
          do embarque.
        </p>
        <p>Não é cidade. Não é ilha. É a gente.</p>
        <p class="proposal__question">Tay, quer namorar comigo?</p>
      </Reveal>

      {!answeredYes ? (
        <div class="proposal__actions">
          <button
            type="button"
            class="proposal__yes"
            onClick={() => setAnsweredYes(true)}
          >
            Sim
          </button>
          <div class="proposal__no-arena" ref={arenaRef} aria-hidden="false">
            <button type="button" class="proposal__no" ref={noRef} aria-label="Não (brincadeira)">
              Não
            </button>
          </div>
        </div>
      ) : (
        <Reveal className="proposal__celebration" as="div">
          <p class="proposal__thanks">Eu te esperava nesse “sim”.</p>
          <p class="proposal__closing">
            Agora a viagem tem um nome a mais: o nosso. Mal posso esperar por Tailândia, Bali —
            e por tudo que vem depois, com você.
          </p>
          <p class="proposal__love">Te amo demais da conta, bemzinnnn!!!! ♥</p>
        </Reveal>
      )}
    </section>
  );
}
