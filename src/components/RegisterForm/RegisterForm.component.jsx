import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

const StyledForm = styled.div`
  display: block;
  max-width: 620px;
  margin: 40px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

StyledForm.Form = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: rgba(248, 248, 248, 0.8);
  outline: solid 1px gray;
  padding: 10px;
`;

StyledForm.Input = styled(Field)`
  font-size: 20px;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 99%;
  padding: 0 8px;
`;

StyledForm.Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #444444;
  width: 100%;
`;

StyledForm.Error = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: red;
  padding-left: 20px;
`;

export default StyledForm;
