import IconCreditCard from '@/components/Icons/IconCreditCard/IconCreditCard';
import IconEmail from '@/components/Icons/IconEmail/IconEmail';
import IconHeart from '@/components/Icons/IconHeart/IconHeart';
import IconPlusCircle from '@/components/Icons/IconPlusCircle/IconPlusCircle';
import IconRefreshCCW from '@/components/Icons/IconRefreshCCW/IconRefreshCCW';
import IconSlash from '@/components/Icons/IconSlash/IconSlash';
import IFaqContent from '@/model/components/Faq/FaqContent';

const faqContent: IFaqContent[] = [
  {
    icon: <IconHeart />,
    heading: 'Is there a free trial available?',
    subheading:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
  },
  {
    icon: <IconRefreshCCW />,
    heading: 'Can I change my plan later?',
    subheading:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    icon: <IconSlash />,
    heading: 'What is your cancellation policy?',
    subheading:
      'We understand that things change. You can cancel your plan at any time and we`ll refund you the difference already paid.',
  },
  {
    icon: <IconPlusCircle />,
    heading: 'Can other info be added to an invoice?',
    subheading:
      'Yes, you can try us for free for 30 days. If you want, we`ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    icon: <IconCreditCard />,
    heading: 'How does billing work?',
    subheading:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    icon: <IconEmail />,
    heading: 'How do I change my account email?',
    subheading:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
  },
];

export default faqContent;
