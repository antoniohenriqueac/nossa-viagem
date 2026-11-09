import { chapters } from '../data/itinerary';
import { Chapter } from '../components/Chapter';
import { Hero } from '../components/Hero';
import { PlannerCta } from '../components/PlannerCta';
import { Proposal } from '../components/Proposal';

export function App() {
  const beforePlanner = chapters.slice(0, 4);
  const afterPlanner = chapters.slice(4);

  return (
    <div class="page">
      <Hero />

      <main>
        {beforePlanner.map((chapter, index) => (
          <Chapter key={chapter.id} chapter={chapter} index={index} />
        ))}

        <PlannerCta />

        {afterPlanner.map((chapter, index) => (
          <Chapter key={chapter.id} chapter={chapter} index={index + 4} />
        ))}

        <Proposal />
      </main>
    </div>
  );
}
