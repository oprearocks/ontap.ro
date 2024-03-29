import React from "react"
import { navigate } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { LoginFormValidationSchema } from "../lib/form-validation-schema"

import { useAuth } from "../lib/use-auth"
const Login = ({ focusRef }) => {
  const auth = useAuth()
  return (
    <>
      <h2 className="text-3xl font-mono font-bold">Login to OnTap</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validationSchema={LoginFormValidationSchema}
        onSubmit={async (values, actions) => {
          const { email, password } = values
          try {
            const user = await auth.signin(email, password)

            if (!user) {
              // TODO: Use form-level errors and scces messages (provided by Formik)
              console.log(`Something went wrong, try again`)
              return
            }

            navigate("/dashboard", { replace: true })
          } catch (error) {
            const errorCode = error.code
            const errorMessage = error.message
            if (errorCode === "auth/weak-password") {
              alert("The password is too weak.")
            } else {
              alert(errorMessage)
            }
            console.log(error)
          }
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <label
                className="block text-xl font-mono text-gray-800 font-bold"
                htmlFor="email"
              >
                Email
                <ErrorMessage
                  className="inline-block text-base text-red-800 bg-red-200 px-2 ml-2"
                  name="email"
                  component="span"
                />
              </label>
              <Field
                id="email"
                name="email"
                innerRef={focusRef}
                className="text-2xl font-mono font-bold tracking-wider appearance-none bg-gray-200 py-4 px-8 w-full lg:w-3/4 xl:w-1/2"
                placeholder="you@email.com"
              />
              <label
                className="block text-xl font-mono text-gray-800 font-bold"
                htmlFor="password"
              >
                Password
                <ErrorMessage
                  className="inline-block text-base text-red-800 bg-red-200 px-2 ml-2"
                  name="password"
                  component="span"
                />
              </label>
              <Field
                id="password"
                type="password"
                name="password"
                className="text-2xl font-mono font-bold tracking-wider appearance-none bg-gray-200 py-4 px-8 w-full lg:w-3/4 xl:w-1/2"
                placeholder="********"
              />
              <button
                type="submit"
                className="block bg-blue-900 text-blue-100 p-4 font-bold font-mono mt-2"
              >
                Login
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default Login
