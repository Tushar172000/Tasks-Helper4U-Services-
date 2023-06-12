import React from 'react';
import { useForm } from 'react-hook-form';

function FormComponent() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" ref={register({ required: true, pattern: /^[A-Za-z]+$/ })} />
      {errors.name && <span>Name is required and should not contain special characters</span>}

      <input type="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <span>A valid email address is required</span>}

      <input type="text" name="address" ref={register({ required: true })} />
      {errors.address && <span>Address is required</span>}

      <input type="tel" name="phone" ref={register({ required: true, pattern: /^[1-9]\d{9}$/ })} />
      {errors.phone && <span>A valid phone number is required</span>}

      <input type="text" name="dob" ref={register({ required: true, pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d{2}$/ })} />
      {errors.dob && <span>A valid date of birth in DD-MM-YYYY format is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
