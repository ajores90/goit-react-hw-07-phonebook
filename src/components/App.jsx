import { useEffect } from 'react';
import { Form, ContactsList, Filter, Title } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      <ContactsList />
    </div>
  );
};

export default App;
