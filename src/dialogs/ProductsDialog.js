import React from 'react';
import DialogForm from 'components/DialogForm';
import ProductsForm from 'forms/ProductsForm';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddButton from 'components/AddButton';

function ProductsDialog({
  onSubmit,
  initialValues,
  onClose = () => {},
  onAdd = () => {},
  open = false,
}) {
  return (
    <div>
      <DialogForm title="Produtos" open={open} onClose={onClose}>
        {({ onClose }) => (
          <ProductsForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            footer={({ submitting }) => (
              <DialogActions>
                {!submitting && (
                  <Button onClick={onClose} color="primary">
                    Cancelar
                  </Button>
                )}
                <Button
                  variant="contained"
                  disabled={submitting}
                  type="submit"
                  color="primary"
                >
                  Enviar
                </Button>
              </DialogActions>
            )}
          />
        )}
      </DialogForm>
      <AddButton onClick={onAdd} />
    </div>
  );
}

export default ProductsDialog;
