import React from 'react';

const ContactForm = () => {
  const [id, setId] = React.useState('');
  const [registarId, setRegistarId] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id,
      registarId,
      name,
      age,
      email,
      phone,
      address,
      city,
      zipCode,
    };
    // Add newContact to mockDataContacts here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </label>
      <label>
        Registar ID:
        <input
          type="text"
          value={registarId}
          onChange={(event) => setRegistarId(event.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
