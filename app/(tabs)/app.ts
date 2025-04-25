const fetchBackendData = async (alertObj, platform) => {
    try {
      const response = await fetch('http://localhost:3001/api/message');
      const json = await response.json();
      if (platform === 'web'){
        console.log('Backend says:', json.message);
      } else {
        alertObj.alert('Backend says:', json.message);
      }
    } catch (error) {
      if (platform === 'web'){
        console.error('Error fetching data:', error);
      } else {
        alertObj.alert('Error', 'Could not connect to backend');
      }

    }
  };

  export default {
    fetchBackendData
  };