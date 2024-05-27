import ISignUpFormFields from '@/model/pages/SignUp/SignUpFormFields';

const signUpFormFields: ISignUpFormFields[] = [
  {
    name: 'name',
    type: 'name',
    titleLabel: 'Name*',
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    type: 'email',
    titleLabel: 'Email*',
    placeholder: 'Enter your email',
  },
  {
    name: 'passwordOne',
    type: 'password',
    titleLabel: 'Password*',
    placeholder: 'Create a password',
  },
  {
    name: 'passwordTwo',
    type: 'password',
    titleLabel: 'Confirm Password*',
    placeholder: 'Confirm Password',
  },
];

export default signUpFormFields;
