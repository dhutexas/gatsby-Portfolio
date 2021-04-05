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
  img: 'IMG_1400.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1_inlUIqYueKEBsPPLqQUm7UxNjr2cZC1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Medium_Upsets.png',
    title: 'Can Visualizing Key Variables in a New Way Help Us See Problems with Machine Learning Models?',
    info: 'State-of-the-art machine learning models can predict binary events, such as who will win a basketball game, with incredible accuracy. However, it can be hard to measure the uncertainty around their point estimates, making it a challenge to decipher what went wrong when accuracy slumps. Using the 2021 Mens NCAA College Basketball Tournament, an event which obliterated the accuracy of many prior-season winning models, I demonstrate a method to define and visualize the uncertainty around predicted events which can be used to enhance the efficacy of modern methods',
    info2: 'More info here.',
    url: 'https://towardsdatascience.com/can-we-see-an-upset-before-it-happens-predicting-the-madness-of-march-b16e89d972ec?sk=56d771d8bff9070212ab158a937dd8b0',
    repo: 'https://github.com/dhutexas/finding_upsets', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Medium_ClusteringNBA.jpg',
    title: 'Looking at 80 Variables, Can We Define Players Based Upon How They Play?',
    info: 'Like any game of skill, players play the game differently. In a sense, the loose style of play we recognize players as having (a ‘driving scorer’ or a ‘three point specialist’) are like personalities of play. Each player is more likely to do some things, and less likely to do others than the majority of players. These tendencies are like traits, defining how a player plays the game. We inherently notice some of these easily when watching (e.g., from behind the arc James Harden is likely to try a stepback, while Danny Green is more likely to catch and shoot), but there are likely patterns of play which are not readily visible. For these hidden patterns of play machine learning can be used to mathematically derive these patterns from measured data, grouping players into categories of similar play.',
    info2: '',
    url: 'https://medium.com/swlh/whats-your-basketball-personality-499fd943b34d?sk=68746a384a567065d61a6fd407ee976d',
    repo: 'https://github.com/dhutexas/NBA-Cluster-Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NCAA2019.png',
    title: 'Predicting the Madness of March: Insights from a Top 15% Kaggle Finish',
    info: 'The NCAA tournament challenge is one of the most popular competitions on Kaggle each year. Prior work demonstrated the efficacy of ensemble models (Random Forest and Logistic Regression) in forecasting outcomes which improved when performing detailed feature importance analysis to reduce multicolinearity while maintaining explanatory power.',
    info2: '',
    url: 'https://github.com/dhutexas/NCAA_2019',
    repo: 'https://github.com/dhutexas/NCAA_2019', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HansonYan_Pnom2019.jpg',
    title: 'How Do You Know What You Know?',
    info: 'After reading a text you have a general feeling of how well you comprehend what you read. Research commonly measures this estimate, but how did you come up with it? What cues did you use to estimate your level of learning?',
    info2: '',
    url: 'https://drive.google.com/file/d/1jKW1PAuoHuAltIr0PJvOef0tFLVG0hRW/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HansonYan_Pnom2018.jpg',
    title: 'Does a Thirst for Learning Save You from Mental Traps?',
    info: 'Learning in the classroom can be a boring experience. When we are bored or tuned out we fall prey to making silly mental mistakes. Are learners who enjoy problem solving and thinking through challenging tasks less likely to fall prey to these mental shortcuts?',
    info2: '',
    url: 'https://drive.google.com/file/d/1siT3GhY53hCMwojYcBNEySaCn-aw7jxQ/view',
    repo: '', // if no repo, the button will not show up
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
