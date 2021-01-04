import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';
import utils from '../../../lib/utils/apiLogic';

function AdvancedSearch({ advancedSearch }) {
  return (
    <div>
      <Formik
        initialValues={{
          ingredient1: '',
          ingredient2: '',
          ingredient3: '',
          ingredient4: '',
          ingredient5: '',
          'non/alcoholic': 'both',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.ingredient1) {
            errors.searchInput = 'Required';
          }
          // add error for if that ingredient is not contained in the db??
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // search function here! send all form data
            // search(values.searchInput);
            // move this to app level so it can update state
            utils.advancedSearchFilter(values);
            alert(JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="centered">
            <Field type="text" name="ingredient1" />
            <ErrorMessage name="ingredient1" component="div" />
            <Field type="text" name="ingredient2" />
            <ErrorMessage name="ingredient2" component="div" />
            <Field type="text" name="ingredient3" />
            <ErrorMessage name="ingredient3" component="div" />
            <Field type="text" name="ingredient4" />
            <ErrorMessage name="ingredient4" component="div" />
            <Field type="text" name="ingredient5" />
            <ErrorMessage name="ingredient5" component="div" />
            <label>
              <Field type="radio" value="both" name="non/alcoholic" checked="checked" />
              Alcoholic & non-alcoholic
            </label>
            <label>
              <Field type="radio" value="alcoholic" name="non/alcoholic" />
              Alcoholic only
            </label>
            <label>
              <Field type="radio" value="non-alcoholic" name="non/alcoholic" />
              Non-alcoholic only
            </label>
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

AdvancedSearch.propTypes = {
  advancedSearch: PropTypes.func.isRequired,
};

export default AdvancedSearch;
