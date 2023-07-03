import { Formik } from 'formik';
import StyledForm from './RegisterForm.component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { register } from '../../store/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    // console.log('submitted: ', values);
    dispatch(register(values));
    setName('');
    setEmail('');
    setPassword('');
    resetForm();
  };

  return (
    <StyledForm>
      <p class="h-12 bg-orange-600 text-black text-center py-2 text-2xl">
        Please Sign-Up
      </p>
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
            E-Mail:
            <StyledForm.Input type="text" name="email" />
          </StyledForm.Label>
          <StyledForm.Label>
            Password:
            <StyledForm.Input type="password" name="password" />
          </StyledForm.Label>
          <div class="flex gap-3 mt-3 mb-1 justify-center">
            <button
              class="bg-orange-600 hover:bg-orange-700 text-white font-light text-base h-9 w-40 px-4 rounded"
              type="submit"
            >
              Register
            </button>
            <button
              class="bg-slate-400 hover:bg-slate-600 text-black font-light text-base h-9 w-40 px-4 rounded"
              onClick={() => navigate('/login')}
              type="button"
            >
              Back To Login
            </button>
          </div>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};
