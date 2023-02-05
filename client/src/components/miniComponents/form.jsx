import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    image: null
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleImageChange = event => {
    setFormData({
      ...formData,
      image: event.target.files[0]
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className='my-form'>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} value={formData.email} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" onChange={handleChange} value={formData.phone} />
      </label>
      <br />
      <label>
        Address:
        <textarea name="address" onChange={handleChange} value={formData.address} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
