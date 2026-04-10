import Button from '../components/Button';

function NotFoundPage() {
  return (
    <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-8 sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Error 404</p>
        <h1 className="mt-3 text-4xl font-black text-zinc-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
          The page you are looking for does not exist or may have been moved to a different route.
          Use the buttons below to go back to safe pages.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/" variant="primary">Back Home</Button>
          <Button to="/articles">Browse Articles</Button>
          <Button to="/about">Open About</Button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;