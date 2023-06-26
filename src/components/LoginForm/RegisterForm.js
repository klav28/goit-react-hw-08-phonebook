import { Formik } from 'formik';
import StyledForm from './RegisterForm.component';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { register } from '../../store/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    console.log('submitted: ', values);
    dispatch(register(values));
    setName('');
    setEmail('');
    setPassword('');
    resetForm();
  };

  return (
    <StyledForm>
      <h1>Register User</h1>
      <Formik
        initialValues={{ name, email, password }}
        onSubmit={handleSubmit}
        // validationSchema={schema}
      >
        <StyledForm.Form>
          <StyledForm.Label>
            Name:
            <StyledForm.Input type="text" name="name" />
          </StyledForm.Label>
          <StyledForm.Label>
            Login:
            <StyledForm.Input type="text" name="email" />
          </StyledForm.Label>
          <StyledForm.Label>
            Password:
            <StyledForm.Input type="password" name="password" />
          </StyledForm.Label>
          <StyledForm.Button type="submit">Register</StyledForm.Button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};