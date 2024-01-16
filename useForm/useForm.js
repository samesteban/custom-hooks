import { useState } from "react";

export const useForm = (initialFields = {}) => {
  const [formState, setFormState] = useState(initialFields);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialFields);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,
  };
};
