import styled from '@emotion/styled';

const Header = styled.header`
  background-color: white;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10px;
  width: 360px;
`;
const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: auto;
`;

const LabelEl = styled.form`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpanHello = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;

  height: 25px;
  min-width: 250px;
  max-width: 600px;
  padding: 7px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const InputSearch = styled.input`
  flex: 1;
  margin-top: 10px;
  height: 25px;
  min-width: 250px;
  max-width: 600px;
  padding: 7px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: auto;
  padding: 7px;

  border: none;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -5px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transform: scale(1.05);
  }
`;
const ButtonLogin = styled.button`
  width: 100px;
  height: 30px;
  margin: auto;
  padding: 7px;

  border: none;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -5px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transform: scale(1.05);
  }
`;

const ButtonLogout = styled.button`
  padding: 7px;
  background-color: transparent;
  border: none;
  font-weight: bold;

  &: hover {
    color: orange;
    transform: scale(1.05);
  }
`;
const SpanEl = styled.span`
  color: white;
`;

export {
  Input,
  Button,
  FormEl,
  Section,
  LabelEl,
  ButtonLogin,
  InputSearch,
  SpanHello,
  ButtonLogout,
  Header,
  Nav,
  SpanEl,
};
