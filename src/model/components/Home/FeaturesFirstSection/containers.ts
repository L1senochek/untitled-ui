import { ReactElement } from 'react';
import ICheckItems from './checkItems';

interface IContainers {
  content: {
    icon: ReactElement;
    heading: string;
    subheading: string;
    checkItems: ICheckItems[];
  };
  imgMockup: string;
  img: string;
  alt: string;
}

export default IContainers;
