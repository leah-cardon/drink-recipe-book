import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';

function BasicSearch({ search }) {
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
            search(values.searchInput);
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

BasicSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default BasicSearch;
