import { Formik } from 'formik';
import * as yup from 'yup';
import StyledForm from './ContactForm.component';
import Container from '../Container/Container';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/operations';
import { getContacts } from '../../store/selectors';

const phoneRegExp = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is Required field'),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number must be like +919367788755')
    .required('Number is Required field'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    //    onContactAdd(values);
    console.log('submitted: ', values.name);
    if (
      contacts.find(el => el.name.toLowerCase() === values.name.toLowerCase())
    ) {
      alert(`${values.contactName} is already exists in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Container>
      <StyledForm>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <StyledForm.Form>
            <StyledForm.Label>
              Contact Name:
              <StyledForm.Error name="name" component="span" />
              <StyledForm.Input type="text" name="name" />
            </StyledForm.Label>
            <StyledForm.Label>
              Phone Number:
              <StyledForm.Error name="number" component="span" />
              <StyledForm.Input type="tel" name="number" />
            </StyledForm.Label>
            <button
              class="bg-slate-600 hover:bg-orange-600 text-white font-light text-base h-9 w-40 px-4 mt-3 mb-1 rounded mx-auto"
              type="submit"
            >
              Add Contact
            </button>
          </StyledForm.Form>
        </Formik>
      </StyledForm>
    </Container>
  );
};
