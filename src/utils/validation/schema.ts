// // import * as yup from 'yup';

// export const passwordOne = yup
//   .string()
//   .required('Password is required')
//   .matches(/\d+/, { message: { number: '1 number' } })
//   .matches(/[a-z]+/, { message: { lowercase: '1 lowercase letter' } })
//   .matches(/[A-Z]+/, { message: { uppercase: '1 uppercase letter' } })
//   .matches(/[!@#$%^&*()-+]+/, {
//     message: { special: '1 special character' },
//   });

// const schema = yup
//   .object()
//   .shape({
//     name: yup
//       .string()
//       .required('Name is required')
//       .matches(/^[A-Z][a-zA-Z\s]*$/, 'Should start with an uppercase letter'),
//     age: yup
//       .string()
//       .required('Age is required')
//       .matches(/^\d+$/, 'Should not contain negative values'),
//     email: yup
//       .string()
//       .required('Email is required')
//       .matches(
//         /^\S+@\S+\.\S+$/i,
//         'Should be a valid email address(example@example.com)'
//       ),
//     passwordOne: passwordOne,
//     passwordTwo: yup
//       .string()
//       .required('Confirm Password is required')
//       .oneOf([yup.ref('passwordOne')], 'Should match entered password'),
//     gender: yup.string().required('Gender is required'),
//     acceptTC: yup.boolean().oneOf([true], 'Should accept Terms & Conditions'),
//   })
//   .required();

// export default schema;
