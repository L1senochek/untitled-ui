import ILogInFormFields from '@/model/pages/LogIn/logInFormFields';

const logInFormFields: ILogInFormFields[] = [
  {
    name: 'email',
    type: 'email',
    titleLabel: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'passwordOne',
    type: 'password',
    titleLabel: 'Password',
    placeholder: 'Enter your password',
  },
];

export default logInFormFields;
