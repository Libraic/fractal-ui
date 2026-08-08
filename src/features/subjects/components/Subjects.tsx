import Subject from './Subject.tsx';

export function Subjects() {
  return (
    <section className="flex min-h-screen w-full flex-wrap items-center justify-center gap-10 bg-[#16131f] p-8 text-zinc-100">
      <Subject
        title="Algebră"
        description="Învață să rezolvi ecuații, inecuații, sisteme de ecuații și expresii algebrice"
        completedExerciseCount={72}
        exerciseCount={184}
        difficulty="Începător"
        icon="functions"
      />
      <Subject
        title="Geometrie"
        description="Descoperă proprietățile figurilor geometrice, teoremele fundamentale și metode de rezolvare"
        completedExerciseCount={38}
        exerciseCount={152}
        difficulty="Începător"
        icon="square_foot"
      />
      <Subject
        title="Analiză Matematică"
        description="Exersează limitele, derivatele și integralele prin explicații intuitive și exerciții progresive"
        completedExerciseCount={91}
        exerciseCount={126}
        difficulty="Intermediar"
        icon="function"
      />
    </section>
  );
}
