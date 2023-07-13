import type { ProjectInfo } from './ProjectSummary';
import placeholderImg from '@/public/placeholder.png';
import placeholderImg2 from '@/public/placeholder2.png';
import kateTadao from '@/public/Kate_Tadao.jpeg';

export const projectSummaryList: ProjectInfo[] = [
  {
    title: 'Visual Storytelling',
    company: 'Google',
    description:
      'From interactive articles to tappable, mobile-first experiences for the Think with Google platform',
    dateRange: '2021-23',
    tags: ['Information Design', 'Visual Design', 'UX Design'],
    imageUrl: placeholderImg,
  },
  {
    title: 'Mission Assurance Systems',
    company: 'Nasa',
    description:
      'Internal software systems for various teams across the organization',
    dateRange: '2017-19',
    tags: ['UX Research', 'UX Design'],
    imageUrl: placeholderImg2,
  },
  {
    title: 'Tadao',
    company: 'Tadao',
    description: 'Tadao and Chichu!',
    dateRange: '2010-19',
    tags: ['Example Tag', 'Example Tag'],
    imageUrl: kateTadao,
  },
  {
    title: 'Example',
    company: 'Example',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas esse perferendis soluta, unde voluptate laudantium maiores, est doloribus consequatur id quisquam maxime dolore, voluptatum ratione facilis culpa tempore corrupti!',
    dateRange: '2010-19',
    tags: ['Example Tag', 'Example Tag'],
    imageUrl: placeholderImg,
  },
];
