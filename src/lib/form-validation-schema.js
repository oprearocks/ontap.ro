import * as Yup from "yup"

const name = Yup.string()
  .min(4, "Too short (min. 4)")
  .max(100, "Too long (max. 100)")
  .required("Required")

const email = Yup.string()
  .email("Invalid email")
  .min(4, "Too short (min. 4)")
  .max(100, "Too long (max. 100)")
  .required("Required")
const password = Yup.string()
  .min(8, "Too short (min. 8)")
  .max(24, "Too long (max. 24)")
  .required("Required")

export const LoginFormValidationSchema = Yup.object().shape({
  email,
  password,
})

export const SignUpFormValidationSchema = Yup.object().shape({
  name,
  email,
  password,
})

export default SignUpFormValidationSchema
