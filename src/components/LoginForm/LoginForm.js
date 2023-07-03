import { Formik } from 'formik';
import StyledForm from './LoginForm.component';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from '../../store/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
      <p class="h-12 bg-slate-600 text-white text-center py-2 text-2xl">
        Please Login
      </p>
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
          <button
            class="bg-slate-600 hover:bg-orange-600 text-white font-light text-base h-9 w-20 px-4 mt-3 mb-1 rounded mx-auto"
            type="submit"
          >
            Login
          </button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};
