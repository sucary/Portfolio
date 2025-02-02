import React, { useEffect, useState } from 'react';
import { Contact, ContactType } from '../types';
import { getAllContact } from '../services/contactService';
import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getAllContact().then(setContacts).catch(console.error);
  }, []);

  const renderIcon = (type: ContactType) => {
    switch (type) {
      case ContactType.Github:
        return <GitHubIcon />;
      case ContactType.LinkedIn:
        return <LinkedInIcon />;
      case ContactType.Email:
        return <EmailIcon />;
      case ContactType.Phone:
        return <SmartphoneIcon />;
      default:
        return null;
    }
  };

  return (
    <Box className="section">
      <Typography variant="h4">Contacts</Typography>
      <Box className="contacts-container">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <IconButton
              onClick={() => window.open(contact.value, '_blank')}
              color="primary"
              size="large"
            >
              {contact.type[0] && renderIcon(contact.type[0])}
            </IconButton>
            <Typography>{contact.displayName}</Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Contacts;