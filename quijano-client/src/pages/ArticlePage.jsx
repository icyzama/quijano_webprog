import Button from '../components/Button';
import { useMemo } from 'react';
import Cloud from '../assets/Cloud.png';
import Hackathons from '../assets/Hackathons.png';
import ReactComponents from '../assets/ReactComponents.png';
import UIUX from '../assets/UIUX.png';

const articles = [
  {
    id: 1,
    category: 'UI/UX',
    title: 'Designing clean interfaces with visual hierarchy',
    summary: 'A practical guide on structuring content blocks, spacing systems, and typography for better readability.',
    image: UIUX,
  },
  {
    id: 2,
    category: 'Frontend',
    title: 'Building reusable React components',
    summary: 'How to create scalable component patterns that improve consistency across multiple pages.',
    image: ReactComponents,
  },
  {
    id: 3,
    category: 'Career Growth',
    title: 'Lessons from student hackathons',
    summary: 'Insights from collaborative problem solving, pitching ideas, and shipping prototypes under pressure.',
    image: Hackathons,
  },
  {
    id: 4,
    category: 'Cloud & Data',
    title: 'Why cloud fundamentals matter for developers',
    summary: 'Understanding cloud basics helps developers design systems that are reliable, scalable, and secure.',
    image: Cloud,
  },
];

const ArticlePage = () => {
  const randomArticles = useMemo(() => {
    const shuffled = [...articles];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Articles</p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Insights on design, development, and career growth in tech
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
          This section features writeups about building better user interfaces, improving coding practices, and growing as
          a student developer. Each article shares practical lessons you can apply in projects.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>
      
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {randomArticles.map((article) => (
            <article key={article.id} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-300 bg-zinc-200">
                <img src={article.image} alt={article.title} className="aspect-4/3 w-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {article.category} - Article 0{article.id}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{article.summary}</p>
              <Button className="mt-4">Read More</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;