import Cloud from './Cloud.png';
import Hackathons from './Hackathons.png';
import ReactComponents from './ReactComponents.png';
import UIUX from './UIUX.png';

const articles = [
  {
    name: 'designing-clean-interfaces',
    title: 'Designing clean interfaces with visual hierarchy',
    category: 'UI/UX',
    readTime: '6 min read',
    image: UIUX,
    summary:
      'How spacing, contrast, and typography create a user journey that feels natural and easy to understand.',
    content: [
      'A good interface should communicate before the user thinks. Visual hierarchy is the tool that helps us do this. By controlling size, contrast, and spacing, we show users what matters most first.',
      'I usually start from content priority. Primary actions need strong emphasis, while secondary actions can be quieter. This keeps screens clean and lowers cognitive load.',
      'In practice, I use repeated spacing values, clear heading scales, and high-contrast call-to-action elements. These small decisions make a design feel structured and professional.',
      'The goal is not just beauty, but clarity. When users can scan and act quickly, the design is doing its job.',
    ],
  },
  {
    name: 'building-reusable-react-components',
    title: 'Building reusable React components',
    category: 'Frontend',
    readTime: '7 min read',
    image: ReactComponents,
    summary:
      'Why reusable components speed up development and keep large interfaces consistent across multiple pages.',
    content: [
      'Reusable components reduce duplicated code and make updates easier. Instead of rebuilding buttons, cards, or forms each time, we create one reliable version and reuse it.',
      'I focus on component APIs that are simple and flexible. Good props naming and clear defaults help components stay easy to use.',
      'Another key part is separation of concerns. Components should focus on presentation while page-level files handle data and routing logic.',
      'As projects grow, this approach improves maintainability and team collaboration. Everyone builds with the same patterns, which means fewer inconsistencies and faster delivery.',
    ],
  },
  {
    name: 'lessons-from-student-hackathons',
    title: 'Lessons from student hackathons',
    category: 'Career Growth',
    readTime: '5 min read',
    image: Hackathons,
    summary:
      'A reflection on teamwork, rapid prototyping, and execution under pressure during hackathon events.',
    content: [
      'Hackathons train both technical and communication skills. In a short timeline, you must define a problem, plan a solution, and deliver a working prototype.',
      'My biggest lesson is to prioritize scope early. Teams perform better when the core feature is clear and achievable within the event duration.',
      'Collaboration is also critical. Dividing roles and checking progress often prevents blockers and improves final output quality.',
      'Beyond prizes, hackathons build confidence. They teach you to ship ideas quickly and adapt to feedback in real time.',
    ],
  },
  {
    name: 'cloud-fundamentals-for-web-developers',
    title: 'Cloud fundamentals for modern web developers',
    category: 'Cloud & Data',
    readTime: '8 min read',
    image: Cloud,
    summary:
      'Core cloud concepts every developer should understand to build reliable, scalable web applications.',
    content: [
      'Cloud knowledge is valuable even for frontend developers. Understanding hosting, storage, and deployment pipelines improves how we design and ship applications.',
      'Concepts like scalability, availability, and security directly affect user experience. A fast interface still fails if backend services are unreliable.',
      'I started learning cloud by connecting simple web projects to managed services and monitoring performance after deployment.',
      'The long-term benefit is systems thinking. You begin designing apps not just for local development, but for real users in production environments.',
    ],
  },
];

export default articles;