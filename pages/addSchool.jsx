// pages/addSchool/addSchool.jsx

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from '../styles/addSchool.css';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Handle image upload to server or cloud storage
      const imageUrl = 'path_to_uploaded_image';

      // Save data to MySQL
      await axios.post('/api/addSchool', { ...data, image: imageUrl });

      router.push('/showSchools');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <label>School Name:</label>
      <input {...register('name', { required: 'This field is required' })} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Address:</label>
      <input {...register('address', { required: 'This field is required' })} />
      {errors.address && <p>{errors.address.message}</p>}

      <label>City:</label>
      <input {...register('city', { required: 'This field is required' })} />
      {errors.city && <p>{errors.city.message}</p>}

      <label>State:</label>
      <input {...register('state', { required: 'This field is required' })} />
      {errors.state && <p>{errors.state.message}</p>}

      <label>Contact Number:</label>
      <input {...register('contact', { required: 'This field is required' })} />
      {errors.contact && <p>{errors.contact.message}</p>}

      <label>Email ID:</label>
      <input {...register('email_id', { required: 'This field is required' })} />
      {errors.email_id && <p>{errors.email_id.message}</p>}

      <label>Image:</label>
      <input type="file" {...register('image', { required: 'This field is required' })} />
      {errors.image && <p>{errors.image.message}</p>}

      <button type="submit">Add School</button>
    </form>
  );
}
