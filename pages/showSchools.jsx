// pages/showSchools/showSchools.jsx

import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

export default function ShowSchools({ schools }) {
  if (!schools || !schools.length) {
    return (
      <div>
        <p>No schools found.</p>
        <Link href="/addSchool">
          <button>Add School</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/addSchool">
        <button>Add School</button>
      </Link>
      {schools.map((school) => (
        <div key={school.id}>
          {/* Update the image source path to be relative to the server */}
          <Image
            src={`/schoolImages/${school.image}`}
            alt={school.name}
            width={200}
            height={150}
          />
          <p>Name: {school.name}</p>
          <p>Address: {school.address}</p>
          <p>City: {school.city}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/showSchools');
    console.log('API Response:', response.data);
    const schools = response.data;

    return {
      props: {
        schools: schools || [],
      },
    };
  } catch (error) {
    console.error('Error fetching schools:', error.message || error);

    return {
      props: {
        schools: [],
      },
    };
  }
}
