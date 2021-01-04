import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

function BasicSearch() {
  return (
    <div>
      <Formik
        initialValues={{ searchInput: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.searchInput) {
            errors.searchInput = 'Required';
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
          <Form className="centered basic searchBar">
            <Field
              type="text"
              name="searchInput"
              placeholder="Mojito, gin, pisco, grenadine..."
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
            <ErrorMessage name="searchInput" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BasicSearch;
