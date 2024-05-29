import ISignUpFormFields from '@/model/pages/SignUp/SignUpFormFields';

const contactFormField: ISignUpFormFields[] = [
  {
    name: 'firstName',
    type: 'name',
    titleLabel: 'First name',
    placeholder: 'First name',
  },
  {
    name: 'lastName',
    type: 'name',
    titleLabel: 'Last name',
    placeholder: 'Last name',
  },
  {
    name: 'email',
    type: 'email',
    titleLabel: 'Email',
    placeholder: 'you@company.com',
  },
  {
    name: 'phoneNumber',
    type: 'number',
    titleLabel: 'Phone number',
    placeholder: '+1 (555) 000-0000',
  },
];

export default contactFormField;
