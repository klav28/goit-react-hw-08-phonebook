import { Formik } from 'formik';
import StyledForm from './LoginForm.component';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from '../../store/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    console.log('LogIn submitted: ', values);
    dispatch(logIn(values));
    setName('');
    setEmail('');
    setPassword('');
    resetForm();
  };

  return (
    <StyledForm>
      <h1>Login User</h1>
      <Formik
        initialValues={{ name, email, password }}
        onSubmit={handleSubmit}
        // validationSchema={schema}
      >
        <StyledForm.Form>
          <StyledForm.Label>
            Login:
            <StyledForm.Input type="text" name="email" />
          </StyledForm.Label>
          <StyledForm.Label>
            Password:
            <StyledForm.Input type="password" name="password" />
          </StyledForm.Label>
          <StyledForm.Button type="submit">Login</StyledForm.Button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};
