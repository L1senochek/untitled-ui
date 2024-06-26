import IconBarChart from '@/components/Icons/IconBarChart/IconBarChart';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';
import IconZap from '@/components/Icons/IconZap/IconZap';
import ICheckItems from '@/model/components/Home/FeaturesFirstSection/checkItems';
import IContainers from '@/model/components/Home/FeaturesFirstSection/containers';
import imgMockupScreenWelcomeBack from '@/assets/img/ScreenMockupWelcomeBack.png';
import imgScreenWelcomeBack from '@/assets/img/ScreenWelcomeBack.png';
import imgMockupScreenCustomers from '@/assets/img/ScreenMockupCustomers.png';
import imgScreenCustomers from '@/assets/img/ScreenCustomers.png';
import imgMockupScreenOrganizationOverview from '@/assets/img/ScreenMockupOrganizationOverview.png';
import imgScreenOrganizationOverview from '@/assets/img/ScreenOrganizationOverview.png';

export const checkItemsShareTeamInboxes: ICheckItems[] = [
  { text: 'Leverage automation to move fast' },
  { text: 'Always give customers a human to chat to' },
  { text: 'Automate customer support and close leads faster' },
];

export const checkItemsDeliverInstantAnswers: ICheckItems[] = [
  { text: 'Keep your customers in the loop with live chat' },
  { text: 'Embed help articles right on your website' },
  { text: 'Customers never have to leave the page to find an answer' },
];

export const checkItemsManageTeam: ICheckItems[] = [
  { text: 'Filter, export, and drilldown on the data quickly' },
  { text: 'Save, schedule, and automate reports to your inbox' },
  { text: 'Connect the tools you already use with 100+ integrations' },
];

export const containers: IContainers[] = [
  {
    content: {
      icon: <IconEmail />,
      heading: 'Share team inboxes',
      subheading:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      checkItems: checkItemsShareTeamInboxes,
    },
    imgMockup: imgMockupScreenWelcomeBack,
    img: imgScreenWelcomeBack,
    alt: 'ScreenWelcomeBack',
  },
  {
    content: {
      icon: <IconZap />,
      heading: 'Deliver instant answers',
      subheading:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      checkItems: checkItemsDeliverInstantAnswers,
    },
    imgMockup: imgMockupScreenCustomers,
    img: imgScreenCustomers,
    alt: 'ScreenCustomers',
  },
  {
    content: {
      icon: <IconBarChart />,
      heading: 'Manage your team with reports',
      subheading:
        'Measure what matters with Untitled`s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      checkItems: checkItemsManageTeam,
    },
    imgMockup: imgMockupScreenOrganizationOverview,
    img: imgScreenOrganizationOverview,
    alt: 'ScreenOrganizationOverview',
  },
];
