import React, { useEffect, useState } from 'react';

const dogImages = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dogNames = ["Buddy", "Bella", "Charlie", "Pipi", "Lucy", "Daisy", "Bailey", "Sans", "Rocky", "Molly", "Popó"];

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const dogsWithNames = data.map((dog, index) => ({
          ...dog,
          name: dogNames[Math.floor(Math.random() * dogNames.length)]
        }));
        setDogs(dogsWithNames);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dog Images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogs.map(dog => (
          <div key={dog.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={dog.url} alt="dog" style={{ width: '200px' }} />
            <p>{dog.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dogImages;