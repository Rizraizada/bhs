// src/components/ClassList.js

import { useEffect, useState } from 'react';
import { fetchClasses } from '../config/apiConfig';  // Import the API call

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        const data = await fetchClasses();
        setClasses(data);
      } catch (error) {
        console.error('Error loading classes:', error);
      }
    };

    loadClasses();
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <a href={`/class/${classItem.id}`}>{classItem.class_name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
