import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contactform = () => (
   <div>
    <h1 style={{ textAlign: `center` }}>Create account</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
       >
       {({ isSubmitting }) => (
         <Form style={{ display: `flex`, flexDirection: `column`, alignContent: `center`, alignItems: `center`, minWidth: `250px`, background: `#004AAD`, padding: `1rem`, margin: `auto` }}>
           <h6 style={{ font: `Open Sans`, color: `white` }}>Email Address</h6>
           <Field type="email" name="email" style={{ color: `#5E17EB`, background: `white` }} />
           <ErrorMessage name="email" component="div" />
           <br />
           <h6 style={{ font: `Open Sans`, color: `white` }}>Password</h6>
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <br />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
         
       )}
     </Formik>
   </div>
 );
 
 export default Contactform