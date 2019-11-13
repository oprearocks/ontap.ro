import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { SignUpFormValidationSchema } from "../lib/form-validation-schema"
import { useAuth } from "../lib/use-auth"

const SignUp = ({ focusRef }) => {
  const auth = useAuth()
  return (
    <>
      <h2 className="text-3xl font-mono font-bold">Sign up for OnTap</h2>
      <p className="font-mono text-lg">
        Just add your phone number, below and we'll get you set up in no time
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validateOnBlur
        validationSchema={SignUpFormValidationSchema}
        onSubmit={async (values, actions) => {
          const { name, email, password } = values
          try {
            const user = auth.signup(email, password)
            if (!user) {
              // TODO: Use form-level errors and scces messages (provided by Formik)
              console.log(`Something went wrong, try again`)
            }

            if (name) {
              await auth.user.updateProfile({
                displayName: name,
              })
            }

            // TODO: Send the email then set some state var and display a message instead of the form
            const emailsent = await auth.user.sendEmailVerification()
            console.log(
              `Congratulations ${name} we've sent you a confirmation email. Check your inbox.`
            )
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
                className="block text-xl font-mono text-gray-800 font-bold mt-4"
                htmlFor="name"
              >
                Full Name
                <ErrorMessage
                  className="inline-block text-base text-red-800 bg-red-200 px-2 ml-2"
                  name="name"
                  component="span"
                />
              </label>
              <Field
                id="name"
                name="name"
                innerRef={focusRef}
                className="text-2xl font-mono font-bold tracking-wider appearance-none bg-gray-200 py-4 px-8 w-full lg:w-3/4 xl:w-1/2"
                placeholder="Ion Zăpadă"
              />
              <label
                className="block text-xl font-mono text-gray-800 font-bold mt-4"
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
                className="text-2xl font-mono font-bold tracking-wider appearance-none bg-gray-200 py-4 px-8 w-full lg:w-3/4 xl:w-1/2"
                placeholder="you@email.com"
              />
              <label
                className="block text-xl font-mono text-gray-800 font-bold mt-4"
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
                Sign up
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default SignUp
