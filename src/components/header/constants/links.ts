import { ILink } from 'interfaces';
import { urls } from 'urls';

export const headerLinks: ILink[] = [
  {
    id: 1,
    name: 'Vehicle Search',
    to: urls.index
  },
  {
    id: 2,
    name: 'About',
    to: urls.about
  },
  {
    id: 3,
    name: 'Contact',
    to: urls.contact
  }
];