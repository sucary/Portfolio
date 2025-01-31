import React, { useEffect, useState } from 'react';
import { Contact } from '../types';
import { getAllContact } from '../services/contactService';


const Contacts = () => {

  const [contact, setContact] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch projects when the component mounts
    const fetchContact = async () => {
      try {
        const data = await getAllContact();
        setContact(data);
      } catch {
        setError('Failed to fetch contact');
      }
    };

    fetchContact();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>contact</h3>
      {contact.map((contact: Contact) => (
        <div>
          <p>{contact.type}</p>
          <p>{contact.value}</p>
          <p>{contact.displayName}</p>
          <p>{contact.icon}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;