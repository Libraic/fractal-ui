function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-cyan-300">
          Fractal UI
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-white sm:text-6xl">
          React, TypeScript, TailwindCSS, and Vite are ready.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Start editing <code className="text-cyan-200">src/App.tsx</code> to
          build the application.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium">
          <a
            className="rounded-md bg-cyan-400 px-4 py-2 text-zinc-950 transition hover:bg-cyan-300"
            href="https://vite.dev"
            rel="noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
          <a
            className="rounded-md border border-zinc-700 px-4 py-2 text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
            href="https://tailwindcss.com"
            rel="noreferrer"
            target="_blank"
          >
            TailwindCSS Docs
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
