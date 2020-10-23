const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length > 15) {
    errors.name = "Debe contener 15 caracteres o menos";
  }

  if (!values.lastName) {
    errors.lastName = "Requerido";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Debe contener 20 caracteres o menos";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo electronico invalido";
  }

  return errors;
};

export default validate;
