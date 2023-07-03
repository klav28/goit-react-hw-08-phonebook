import styled from 'styled-components';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  /* box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25); */
  /* background-color: #f7f7f7; */
  /* outline: solid 1px #444444; */
`;

StyledFilter.Input = styled.input`
  font-size: 20px;
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 0 5px;
  &:focus {
    outline: none;
  }
`;

export default StyledFilter;
