import React, { useEffect, useState } from 'react';  

const dogImages = () => {  
  const [dogs, setdogs] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchdogs = async () => {  
      try {  
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');  
        if (!response.ok) {  
          throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        setdogs(data);  
      } catch (err) {  
        setError(err.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchdogs();  
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
          <img key={dog.id} src={dog.url} alt="dog" style={{ width: '200px', margin: '10px' }} />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default dogImages;  