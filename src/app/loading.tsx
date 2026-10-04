export default function Loading() {
  return (
    <div
      aria-hidden="true"
      className="min-h-screen min-h-[100dvh] bg-[#F7F6F2] text-[#171715] pointer-events-none select-none flex flex-col justify-between"
    >
      {/* Skeleton Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-3.5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-[#E5E3DC] bg-white/70 px-4 sm:px-5 py-2.5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl animate-skeleton" />
              <div className="h-5 w-24 rounded-md animate-skeleton" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="h-4 w-16 rounded-md animate-skeleton" />
              <div className="h-4 w-16 rounded-md animate-skeleton" />
              <div className="h-4 w-16 rounded-md animate-skeleton" />
              <div className="h-4 w-16 rounded-md animate-skeleton" />
            </div>
            <div className="h-9 w-28 rounded-full animate-skeleton" />
          </div>
        </div>
      </header>

      {/* Skeleton Hero - Full screen centered */}
      <section className="my-auto pt-24 pb-8 px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center -translate-y-4 sm:-translate-y-8">
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl animate-skeleton mb-4 sm:mb-5" />
          <div className="h-12 sm:h-16 w-full max-w-3xl rounded-xl animate-skeleton mb-3" />
          <div className="h-12 sm:h-16 w-3/4 rounded-xl animate-skeleton mb-6" />
          <div className="h-4 w-full max-w-xl rounded-md animate-skeleton mb-2" />
          <div className="h-4 w-4/5 max-w-lg rounded-md animate-skeleton mb-8" />
          <div className="flex flex-col sm:flex-row gap-3.5">
            <div className="h-12 w-48 rounded-full animate-skeleton" />
            <div className="h-12 w-40 rounded-full animate-skeleton" />
          </div>
        </div>
      </section>

      {/* Skeleton bottom cue */}
      <div className="pb-8 flex flex-col items-center gap-1.5 opacity-40">
        <div className="h-3 w-24 rounded animate-skeleton" />
      </div>
    </div>
  );
}
