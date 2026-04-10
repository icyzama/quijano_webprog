import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Article not found</h1>
            <p className="mt-3 text-sm text-zinc-600">
              The article you are looking for may have been moved or removed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/articles">Back to Articles</Button>
              <Button to="/" variant="primary">Go Home</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles">Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Article
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {article.category} • {article.readTime}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
            <img src={article.image} alt={article.title} className="aspect-4/3 w-full object-cover" />
          </div>
          <p className="mb-6 text-base leading-7 text-zinc-700">{article.summary}</p>
          <div className="space-y-4 text-zinc-700">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;