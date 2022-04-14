import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  suport_email: Yup.string()
    .email()
    .required(),
  price: Yup.number().required(),
});
