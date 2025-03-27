const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const searchLocation = async (state, category) => {
    const url = API_BASE_URL + '/location/search/v5';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      state: state,
      category: category,
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching location data:', error);
      throw error;
    }
};

export const fetchFeaturedBiz = async () => {
  const url = API_BASE_URL + '/location/featured/biz';
  
    try {
      const response = await fetch(url, {
        method: 'GET'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);

      return data;
    } catch (error) {
      console.error('Error fetching featured biz:', error);
      throw error;
    }
};

export const searchLatLong = async (latitude, longitude, category) => {
  const url = API_BASE_URL + '/location/search/v6';
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    latitude: latitude,
    longitude: longitude,
    category: category,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};