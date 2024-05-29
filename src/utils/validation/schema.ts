import * as yup from 'yup';

export const passwordOne = yup
  .string()
  .required('Password is required')
  .matches(/\d+/, { message: '1 number' })
  .matches(/[a-z]+/, { message: '1 lowercase letter' })
  .matches(/[A-Z]+/, { message: '1 uppercase letter' })
  .matches(/[!@#$%^&*()-+]+/, {
    message: '1 special character',
  });

export const registrationFields = {
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-zA-Z\s]*$/, 'Should start with an uppercase letter'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^\S+@\S+\.\S+$/i,
      'Should be a valid email address(example@example.com)'
    ),
  passwordOne: yup
    .string()
    .required('Password is required')
    .matches(/\d+/, { message: '1 number' })
    .matches(/[a-z]+/, { message: '1 lowercase letter' })
    .matches(/[A-Z]+/, { message: '1 uppercase letter' })
    .matches(/[!@#$%^&*()-+]+/, {
      message: '1 special character',
    }),
  passwordTwo: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('passwordOne')], 'Should match entered password'),
};

export const loginFields = {
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^\S+@\S+\.\S+$/i,
      'Should be a valid email address(example@example.com)'
    ),
  passwordOne: yup
    .string()
    .required('Password is required')
    .matches(/\d+/, { message: '1 number' })
    .matches(/[a-z]+/, { message: '1 lowercase letter' })
    .matches(/[A-Z]+/, { message: '1 uppercase letter' })
    .matches(/[!@#$%^&*()-+]+/, {
      message: '1 special character',
    }),
};

export const contactsFields = {
  firstName: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-zA-Z\s]*$/, 'Should start with an uppercase letter'),
  lastName: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-zA-Z\s]*$/, 'Should start with an uppercase letter'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^\S+@\S+\.\S+$/i,
      'Should be a valid email address(example@example.com)'
    ),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,4}[-\s]?)?(\(?\d{1,3}?\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/,
      'Should be a valid phone number'
    ),
  textField: yup.string().required('Text field is required'),
  acceptPolicy: yup.boolean().oneOf([true], 'Accepting policy is required'),
};

export const schemaSignUp = yup.object().shape(registrationFields).required();
export const schemaLogIn = yup.object().shape(loginFields).required();
export const schemaContacts = yup.object().shape(contactsFields).required();
