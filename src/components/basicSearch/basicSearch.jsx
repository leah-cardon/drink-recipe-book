import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

function BasicSearch({ search, input }) {
  return (
    <div>
      <Formik
        initialValues={{ searchInput: '' }}
        validate={values => {
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="centered basic searchBar" onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchInput"
              placeholder="Mojito, gin, pisco, grenadine..."
              value={values.searchInput}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.searchInput && touched.searchInput && errors.searchInput}
            <div />
            <button type="submit" value="Search" disabled={isSubmitting}>
              Search
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

BasicSearch.propTypes = {
  search: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default BasicSearch;
