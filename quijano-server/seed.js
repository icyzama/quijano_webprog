require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/Users');
const Article = require('./models/Article');

const users = [
  {
    firstName: 'Alicia',
    lastName: 'Reyes',
    age: '29',
    gender: 'female',
    contactNumber: '019171234567',
    email: 'alicia.reyes@robles.dev',
    role: 'admin',
    username: 'aliciareyes',
    password: 'Alicia123!',
    address: 'Sampaloc, Manila, Metro Manila',
    isActive: true,
  },
  {
    firstName: 'Marco',
    lastName: 'Santos',
    age: '31',
    gender: 'male',
    contactNumber: '09182345678',
    email: 'marco.santos@robles.dev',
    role: 'viewer',
    username: 'marcosantos',
    password: 'Marco123!',
    address: 'Tondo, Manila, Metro Manila',
    isActive: true,
  },
  {
    firstName: 'Bianca',
    lastName: 'Cruz',
    age: '26',
    gender: 'female',
    contactNumber: '09193456789',
    email: 'bianca.cruz@robles.dev',
    role: 'editor',
    username: 'biancacruz',
    password: 'Bianca123!',
    address: 'Quezon City, Metro Manila',
    isActive: false,
  },
  {
    firstName: 'Nathan',
    lastName: 'Diaz',
    age: '34',
    gender: 'male',
    contactNumber: '09214567890',
    email: 'nathan.diaz@robles.dev',
    role: 'viewer',
    username: 'nathandiaz',
    password: 'Nathan123!',
    address: 'Pasig City, Metro Manila',
    isActive: true,
  },
  {
    firstName: 'Jasmine',
    lastName: 'Garcia',
    age: '28',
    gender: 'female',
    contactNumber: '09225678901',
    email: 'jasmine.garcia@robles.dev',
    role: 'editor',
    username: 'jasminegarcia',
    password: 'Jasmine123!',
    address: 'Makati City, Metro Manila',
    isActive: false,
  },
  {
    firstName: 'Ethan',
    lastName: 'Lopez',
    age: '33',
    gender: 'male',
    contactNumber: '09236789012',
    email: 'ethan.lopez@robles.dev',
    role: 'viewer',
    username: 'ethanlopez',
    password: 'Ethan123!',
    address: 'Taguig City, Metro Manila',
    isActive: true,
  },
];

const articles = [
  {
    name: 'react-components',
    title: 'Building Modern React Components',
    category: 'Development',
    readTime: '5 min read',
    image: '/src/assets/ReactComponents.png',
    summary: 'Learn how to build reusable and maintainable React components using modern best practices.',
    content: [
      'React components are the building blocks of modern web applications. They allow you to break down complex UIs into smaller, manageable pieces.',
      'In this article, we\'ll explore the key principles of component design, including props, state management, and component composition.',
      'We\'ll also cover advanced topics like hooks, context API, and performance optimization techniques that will help you build better React applications.',
    ],
  },
  {
    name: 'hackathon-tips',
    title: 'Winning Hackathon Strategies',
    category: 'Events',
    readTime: '3 min read',
    image: '/src/assets/Hackathons.png',
    summary: 'Essential tips and strategies for success in hackathon competitions.',
    content: [
      'Hackathons are intense coding competitions where teams work together to build innovative solutions in a limited time.',
      'Success in hackathons requires careful planning, effective teamwork, and the ability to quickly prototype and iterate on ideas.',
      'This guide covers everything from team formation and idea generation to presentation skills and judging criteria.',
    ],
  },
  {
    name: 'portfolio-design',
    title: 'Creating an Impressive Portfolio',
    category: 'Design',
    readTime: '4 min read',
    image: '/src/assets/HomeCover.png',
    summary: 'Design principles and best practices for creating a standout portfolio website.',
    content: [
      'A well-designed portfolio is crucial for showcasing your work and attracting potential employers or clients.',
      'This article covers portfolio design principles, including layout, typography, color theory, and user experience.',
      'Learn how to create a portfolio that effectively communicates your skills and stands out from the competition.',
    ],
  },
];

const seed = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Article.deleteMany();

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          type: user.role,
          password: hashedPassword,
        };
      })
    );

    await User.insertMany(hashedUsers);
    await Article.insertMany(articles);

    console.log('Seed complete: users and articles added to MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
};

seed();
