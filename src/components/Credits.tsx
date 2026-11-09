import { credits } from '../data/itinerary';

export function Credits() {
  return (
    <footer class="credits">
      <p class="credits__title">Créditos das fotos</p>
      <ul class="credits__list">
        {credits.map((c) => (
          <li key={c.place}>
            <span>{c.place}</span>
            {' — '}
            <a href={c.href} target="_blank" rel="noopener noreferrer">
              {c.credit}
            </a>
          </li>
        ))}
      </ul>
      <p class="credits__note">Feito com carinho pra Tay.</p>
    </footer>
  );
}
