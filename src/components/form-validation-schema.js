import * as Yup from 'yup';

const FormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .min(4, 'Too short (min. 4)')
    .max(100, 'Too long (max. 100)')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short (min. 8)')
    .max(24, 'Too long (max. 24)')
    .required('Required')
});

export default FormValidationSchema;
