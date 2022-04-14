import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { getFormattedNumber } from 'utils/transform';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import ProductsDialog from 'dialogs/ProductsDialog';
import api from 'services/api';

const columns = [
  {
    name: 'name',
    label: 'Nome',
  },
  {
    name: 'price',
    label: 'Preço',
  },
  {
    name: 'suport_email',
    label: 'Email de Suporte',
  },
];

function Products() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState({});
  const { onRefresh, ...dataTableProps } = useTable('products', {
    onRowClick,
    onRowsDelete,
  });

  dataTableProps.data = dataTableProps.data.map(product => ({
    ...product,
    price: getFormattedNumber(product.price),
  }));

  function onRowClick(row) {
    setOpen(true);
    setProducts(row);
  }

  async function onRowsDelete(rowsDeleted) {
    rowsDeleted.data.forEach(async rowDeleted => {
      await api.delete(
        `/products/${dataTableProps.data[rowDeleted.dataIndex].id}`,
      );
    });
    toast.success('Produto excluído com sucesso!');
  }

  const onSubmit = async values => {
    if (typeof values?.id === 'number') {
      const { id, ...form } = values;
      await api
        .put(`products/${id}`, form)
        .then(() => toast.success('Produto atualizado com sucesso!'));
    } else {
      await api
        .post('products', { ...values, created_date: new Date() })
        .then(() => toast.success('Produto cadastrado com sucesso!'));
    }
    onRefresh();
    setProducts({});
    setOpen(false);
  };

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <ProductsDialog
        open={open}
        onClose={() => {
          setProducts({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={products}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default Products;
