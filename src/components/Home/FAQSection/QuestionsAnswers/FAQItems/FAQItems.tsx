import IFAQItems from '@/model/components/Home/FAQSections/FAQItems';
import IIconAttribute from '@/model/components/Home/FAQSections/IconAttribute';
import iconPlus from '@/assets/svg/badges/plusCircle.svg';
import iconMinus from '@/assets/svg/badges/minusCircle.svg';

export const iconAttribute: IIconAttribute = {
  plus: {
    src: iconPlus,
    name: 'minus circle',
  },
  minus: {
    src: iconMinus,
    name: 'plus circle',
  },
};

export const FAQItems: IFAQItems[] = [
  {
    questions: 'Is there a free trial available?',
    answers:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
  },
  {
    questions: 'Can I change my plan later?',
    answers:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    questions: 'What is your cancellation policy?',
    answers:
      'We understand that things change. You can cancel your plan at any time and we`ll refund you the difference already paid.',
  },
  {
    questions: 'Can other info be added to an invoice?',
    answers:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
  },
  {
    questions: 'How does billing work?',
    answers:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    questions: 'How do I change my account email?',
    answers:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
  },
];
