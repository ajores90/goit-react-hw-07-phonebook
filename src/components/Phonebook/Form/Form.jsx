import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  InputContainer,
  ButtonContainer,
} from './Form.styled';

const Form = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { id, name, number } = state;
    const contact = {
      id,
      name,
      number,
    };

    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} already exists in the contact book.`);
    } else {
      dispatch(addContact(contact));
    }

    event.target.reset();
  };

  const nameId = state.id;
  const numberId = state.id;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <StyledLabel htmlFor={nameId}>
          Name
          <StyledInput
            onChange={handleChange}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel htmlFor={numberId}>
          Number
          <StyledInput
            onChange={handleChange}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\d{3}-\d{3}-\d{4}"
            title="Phone number must be in the format: xxx-xxx-xxxx"
            required
          />
        </StyledLabel>
      </InputContainer>
      <ButtonContainer>
        <StyledButton type="submit">Add contact</StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
