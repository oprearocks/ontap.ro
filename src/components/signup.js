import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { SignUpFormValidationSchema } from "../lib/form-validation-schema"
import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = firebase.initializeApp(firebaseConfig)

const SignUp = ({ focusRef }) => (
  <>
    <h2 className="text-3xl font-mono font-bold">Sign up for OnTap</h2>
    <p className="font-mono text-lg">
      Just add your phone number, below and we'll get you set up in no time
    </p>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      validationSchema={FormValidationSchema}
      onSubmit={async (values, actions) => {
        const { email, password } = values
        try {
          const result = await app
            .auth()
            .createUserWithEmailAndPassword(email, password)
          if (result) {
            const emailsent = await app
              .auth()
              .currentUser.sendEmailVerification()
            console.log("Email sent!")
          }
        } catch (error) {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode == "auth/weak-password") {
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
              Sign up
            </button>
          </Form>
        )
      }}
    </Formik>
  </>
)

export default SignUp
