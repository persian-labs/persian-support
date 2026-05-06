export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans dark:from-zinc-950 dark:via-black dark:to-indigo-950">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-32 px-8 sm:px-16 sm:items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-700 backdrop-blur dark:border-indigo-900 dark:bg-zinc-900/60 dark:text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Mock repository
        </span>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Persian Test
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A mock repo used to exercise the Persian app — verifying how it
            handles organizations, members, and permission boundaries across
            real-world flows.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            Orgs
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            Permissions
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            Test fixtures
          </span>
        </div>
      </main>
    </div>
  );
}
