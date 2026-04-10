import Button from '../components/Button';
import HomeCover from '../assets/HomeCover.png';

const highlights = [
  {
    title: 'Clean UI Structure',
    description: 'Build readable layouts that guide users through content with clear hierarchy and spacing.',
  },
  {
    title: 'Responsive Design',
    description: 'Deliver pages that adapt to desktop and mobile with consistent visual rhythm and usability.',
  },
  {
    title: 'Creative Problem Solving',
    description: 'Turn ideas into practical interfaces that are both modern and easy to use.',
  },
];

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Home</p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Building modern web experiences through design and code.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              I am Reynald Quijano, an aspiring cloud and data engineer who enjoys frontend development and UI/UX design.
              This portfolio showcases my projects, writing, and continuous growth in technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">Learn More</Button>
              <Button to="/articles">View Articles</Button>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-300 bg-zinc-200">
              <img
                src={HomeCover}
                alt="Modern web design cover"
                className="h-full max-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">KPI Section</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick overview blocks</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[ 
            { val: "12", label: "Projects" }, 
            { val: "08", label: "Sections" }, 
            { val: "24", label: "Screens" }, 
            { val: "04", label: "Layouts" } 
          ].map((kpi, i) => (
            <div key={i} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">{kpi.val}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{kpi.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Why Work With Me</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Strengths and focus areas</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;