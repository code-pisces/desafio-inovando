import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';

import { validate } from 'utils/validate';
import { schema } from './schema';

const focusOnErrors = createDecorator();
import { formatNumber } from 'utils/form';

function ProductsForm({
  onSubmit = values => values,
  footer = () => {},
  initialValues = {},
}) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      initialValues={initialValues}
      getFieldState={(e = 'price') => console.log(e)}
      render={props => {
        const { handleSubmit } = props;
        return (
          <form onSubmit={handleSubmit} noValidate>
            <Field
              name="name"
              autoFocus
              type="text"
              component={TextField}
              label="Nome"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Field
              name="price"
              type="text"
              {...formatNumber()}
              component={TextField}
              label="Preço"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Field
              name="suport_email"
              type="text"
              component={TextField}
              label="Email de suporte"
              margin="normal"
              fullWidth
              variant="outlined"
            />
            {footer(props)}
          </form>
        );
      }}
    />
  );
}

export default ProductsForm;
