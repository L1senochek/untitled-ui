import ILogInFormFields from '@/model/pages/LogIn/logInFormFields';

const logInFormFields: ILogInFormFields[] = [
  {
    name: 'email',
    type: 'email',
    titleLabel: 'Email',
  },
  {
    name: 'passwordOne',
    type: 'password',
    titleLabel: 'Password',
  },
];

export default logInFormFields;
