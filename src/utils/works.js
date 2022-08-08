import ferienwohnung from '../images/ferienwohnung.png';
import portfolio from '../images/portfolio.png';
import woidbook from '../images/woidbook.png';
import ausgabentracker from '../images/ausgabentracker.png';
import baeckerei from '../images/baeckerei.png';
import project from '../images/project.jpg';

const works = [
  {
    title: 'Ferienwohnung',
    description: 'Webseite zum Buchen einer Ferienwohnung',
    imageUrl: ferienwohnung,
    url: '',
    status: 'INWORK',
  },
  {
    title: 'Portfolio',
    description: 'Webseite zur eigenen Representation',
    imageUrl: portfolio,
    url: '',
    status: 'ONLINE',
  },
  {
    title: 'Woidbook',
    description: 'Social Media Plattform für den Bayerischen Wald',
    imageUrl: woidbook,
    url: '',
    status: 'OFFLINE',
  },
  {
    title: 'Ausgabentracker',
    description: 'App zum Tracken von den persönlichen Ausgaben',
    imageUrl: ausgabentracker,
    url: 'https://apps.apple.com/us/app/ausgabentracker-manager/id1603617048',
    status: 'ONLINE',
  },
  {
    title: 'Bäckerei',
    description: 'App zum Vorbestellen von Waren in einer Bäckerei',
    imageUrl: baeckerei,
    url: '',
    status: 'INWORK',
  },
  {
    title: 'Dein Projekt',
    description: 'Du brauchst noch eine Webseite oder App? Melde dich bei mir!',
    imageUrl: project,
    url: 'https://nicolas-hasenkopf.de/#contact',
    status: 'OPEN',
  },
];

export default works;
