export const fetchWeather = (city) => {

  const MY_KEY = "key"; 

  return dispatch => {
    fetch(`http://api/apixu.com/v1/current.json?key=${MY_KEY}=${city}`)
    .then(res => {
      return res.json();
    })
    .then(resJSON => {
      //dispatch the action
      dispatch({ type: "FETCH_WEATHER", payload: resJSON }); 
    })
  }

}