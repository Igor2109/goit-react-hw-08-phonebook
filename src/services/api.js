import { phoneBookInstance } from './phoneBookApi';

export const requestContacts = async () => {
  const { data } = await phoneBookInstance.get('/contacts');
  return data;
};

export const requestAddContacts = async newContact => {
  const { data } = await phoneBookInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContacts = async contactId => {
  const { data } = await phoneBookInstance.delete(`/contacts/${contactId}`);
  return data;
};
