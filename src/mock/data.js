import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1_inlUIqYueKEBsPPLqQUm7UxNjr2cZC1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Medium_ClusteringNBA.jpg',
    title: 'Classifying NBA Positions with a Gaussian Mixture Model',
    info: '',
    info2: '',
    url: 'https://medium.com/swlh/whats-your-basketball-personality-499fd943b34d',
    repo: 'https://github.com/dhutexas/NBA-Cluster-Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HansonYan_Pnom2019.jpg',
    title: 'How Do You Know What You Know?',
    info: 'After reading a text you have a general feeling of how well you comprehend what you read. Research commonly measures this estimate, but how did you come up with it? What cues did you use to estimate your level of learning?',
    info2: '',
    url: '',
    repo: 'https://github.com/dhutexas/NBA-Cluster-Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HansonYan_Pnom2018.jpg',
    title: 'Does a Thirst for Learning Save You from Mental Traps?',
    info: 'Learning in the classroom can be a boring experience. When we are bored or tuned out we fall prey to making silly mental mistakes. Are learners who enjoy problem solving and thinking through challenging tasks less likely to fall prey to these mental shortcuts?',
    info2: '',
    url: 'https://drive.google.com/file/d/1siT3GhY53hCMwojYcBNEySaCn-aw7jxQ/view',
    repo: 'https://github.com/dhutexas/NBA-Cluster-Analysis', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'derekjhanson@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hansondj/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dhutexas',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/followifyoudare/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
