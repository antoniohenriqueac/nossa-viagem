import { Reveal } from './Reveal';

export function PlannerCta() {
  return (
    <section class="planner" id="roteiro" aria-labelledby="planner-title">
      <Reveal className="planner__inner">
        <p class="planner__kicker">No meio do caminho</p>
        <h2 id="planner-title" class="planner__title">
          Vamos desenhar os dias juntos
        </h2>
        <p class="planner__text">
          Tem muita coisa boa nessa rota — e a gente pode ir montando o que mais combina com a gente.
        </p>
        <a
          class="planner__button"
          href="https://ludotrip.app/convite/qI0ltnrNuY0YcKxufxHkYw"
          target="_blank"
          rel="noopener noreferrer"
        >
          vamos montar o roteiro juntos
        </a>
      </Reveal>
    </section>
  );
}
