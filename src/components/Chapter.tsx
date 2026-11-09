import type { Chapter as ChapterData } from '../data/itinerary';
import { withBase } from '../lib/paths';
import { Reveal } from './Reveal';

type Props = {
  chapter: ChapterData;
  index: number;
};

export function Chapter({ chapter, index }: Props) {
  const reverse = index % 2 === 1;

  return (
    <section
      class={`chapter ${reverse ? 'chapter--reverse' : ''}`}
      id={chapter.id}
      aria-labelledby={`${chapter.id}-title`}
    >
      <div class="chapter__media">
        <img
          src={withBase(chapter.image)}
          alt={chapter.imageAlt}
          width={1800}
          height={1200}
          loading="lazy"
          decoding="async"
        />
      </div>

      <Reveal className="chapter__copy" as="div" delay={80}>
        <p class="chapter__kicker">Capítulo {String(index + 1).padStart(2, '0')}</p>
        <h2 id={`${chapter.id}-title`} class="chapter__title">
          {chapter.place}
        </h2>
        <p class="chapter__dates">{chapter.dates}</p>
        <p class="chapter__line">{chapter.line}</p>
      </Reveal>
    </section>
  );
}
