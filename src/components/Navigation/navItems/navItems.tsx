import {
  ABOUT_US_PATH,
  BLOGS_PATH,
  CONTACTS_PATH,
  FAQ_PATH,
  LEGAL_PATH,
  UI_KIT_PATH,
  VIDEO_TUTORIALS_PATH,
} from '@/utils/const/const';
import IconVideo from '@/components/Icons/IconVideo/IconVideo';
import { IDropdownItems } from '@/model/components/DropdownNavItem/DropdownNavItem';
import IconContacts from '@/components/Icons/IconContacts/IconContacts';
import IconFaq from '@/components/Icons/IconFaq/IconFaq';
import IconBook from '@/components/Icons/IconBook/IconBook';
import IconAboutUs from '@/components/Icons/IconAboutUs/IconAboutUs';
import IconDocumentation from '@/components/Icons/IconDocumentation/IconDocumentation';
import IconLogo from '@/components/Icons/IconLogo/IconLogo';

export const productsArr: IDropdownItems[] = [
  {
    item: 'Tutorials',
    path: VIDEO_TUTORIALS_PATH,
    icon: <IconVideo />,
    description: 'Get up and running on new features and techniques.',
  },
  {
    item: 'Contacts',
    path: CONTACTS_PATH,
    icon: <IconContacts />,
    description: 'Our contacts',
  },
  {
    item: 'FAQs',
    path: FAQ_PATH,
    icon: <IconFaq />,
    description: 'Fix a problem, and get answers to your questions.',
  },
];

export const resoursesArr: IDropdownItems[] = [
  {
    item: 'Blogs',
    path: BLOGS_PATH,
    icon: <IconBook />,
    description: 'The latest industry news, updates and info.',
  },
  {
    item: 'About us',
    path: ABOUT_US_PATH,
    icon: <IconAboutUs />,
    description: 'Learn about our story and our mission statement.',
  },
  {
    item: 'Legal',
    path: LEGAL_PATH,
    icon: <IconDocumentation />,
    description: 'Privacy Policy',
  },
  {
    item: 'UI KIT',
    path: UI_KIT_PATH,
    icon: <IconLogo />,
    description: 'You can see our UI KIT',
  },
];
