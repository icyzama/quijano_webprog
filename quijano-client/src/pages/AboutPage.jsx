import Button from '../components/Button';
import ReyPic from '../assets/ReyPicture.JPG';

const education = [
  'Junior at National University - Manila',
  'Focused on Cloud Computing, Data Engineering, and Software Development',
  'Active participant in hackathons and innovation challenges',
];

const skills = ['Figma', 'React JS', 'HTML', 'CSS', 'JavaScript', 'UI/UX Prototyping'];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex items-center justify-center rounded-[1.25rem] bg-zinc-200 p-3">
              <img
                src={ReyPic}
                alt="Reynald Quijano"
                className="h-80 w-56 rounded-2xl border-2 border-zinc-300 object-cover object-top bg-zinc-50 sm:h-96 sm:w-64"
              />
            </div>
          </div>
          <div className="self-start">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">About Me</p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">Reynald Quijano</h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Reynald is an aspiring cloud and data engineer with hands-on experience in UI/UX design and frontend development.
              He enjoys creating purposeful digital experiences and solving real-world problems through technology.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              With a growth mindset and strong teamwork values, he continuously improves his technical and leadership skills
              to build solutions that are practical, user-centered, and impactful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Education</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
              {education.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Core Skills</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border-2 border-zinc-900 bg-zinc-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;