export function ProblemsTableHeader() {
  return (
    <thead>
      <tr className="bg-(--color-surface) text-sm font-medium text-(--color-text-subtle)">
        <th className="w-14 rounded-l-md px-6 py-3"></th>
        <th className="w-24 px-6 py-3">#</th>
        <th className="px-6 py-3">Titlu</th>
        <th className="px-6 py-3">Dificultate</th>
        <th className="px-6 py-3">Cunoștințe</th>
        <th className="rounded-r-md px-6 py-3">Data creării</th>
      </tr>
    </thead>
  );
}
