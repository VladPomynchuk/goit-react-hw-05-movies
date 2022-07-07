import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

export const initialValues = {
  query: '',
};

const schema = yup.object({
  query: yup.string().required(),
});

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = value => {
    setSearchParams({ query: value.query.trim() });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Field type="text" name="query" placeholder="Please, enter a query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchForm;
