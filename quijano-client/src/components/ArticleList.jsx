import { useMemo } from 'react';
import Button from './Button';

const ArticleList = ({ articles }) => {
  const sortedArticles = useMemo(() => {
    const copy = [...articles];
    return copy.sort((a, b) => a.title.localeCompare(b.title));
  }, [articles]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {sortedArticles.map((article, index) => (
        <article key={article.name} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
          <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-300 bg-zinc-200">
            <img src={article.image} alt={article.title} className="aspect-4/3 w-full object-cover" />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {article.category} • {article.readTime} • {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600">{article.summary}</p>
          <Button to={`/articles/${article.name}`} className="mt-4">Read More</Button>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;