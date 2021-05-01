import axios from "axios";
//actions are the items of a prep list. how they do it is the methodos
export const FETCHING_API_LOADING = "FETCHING_API_LOADING";
export const FETCHING_API_SUCCESS = "FETCHING_API-SUCCESS";
export const FETCHING_API_FAILURE = "FETCHING_API_FAILURE";
export const SEARCH_VALUE = "SEARCH_VALUE";
//searchValue will take in a new search value and....
export const searchValue = (newSearch) => {
  //sanity check new search value immediately
  //console.log('New Search Value from actions/index', newSearch)
  //return the type and payload: newSearch
  return { type: SEARCH_VALUE, payload: newSearch };
  //that's it
};

export const weatherSearchValue = (newSearch) => {
  //sanity check new search value immediately
  //console.log('New Search Value from actions/index', newSearch)
  return { type: SEARCH_VALUE, payload: newSearch}
}

//next the reducer will take props and running through dispatch will retrieve the data with an api call
export const fetchData = (props) => (dispatch) => {
  //sanity check props immediately
  //console.log('received props from fetchData action/index',props);
  //make the axios call
  //set variables related to api calls
  const PUBLIC_KEY = "e2413ca828a65e2cb80fba818d0052b7";
  dispatch({ type: FETCHING_API_LOADING });
  axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${props}&limit=50&apikey=${PUBLIC_KEY}`
    )
    .then((res) => {
      dispatch({ type: FETCHING_API_SUCCESS, payload: res.data.data.results });
      console.log(
        "RESOLVED DATA FROM INITIAL API CALL SUCCESSFUL",
        res.data.data.results
      );
    })
    .catch((err) => {
      dispatch({ type: FETCHING_API_FAILURE, payload: err });
      console.log("API CALL NO_JOY STATUS", err);
    });
};

export const fetchData2 = (props) => (dispatch) => {
  //sanity check props immediately
  //console.log('received props from fetchData action/index',props);
  const PUBLIC_KEY = "dd71922b5e8047a1a2a123926210502";
  dispatch({ type: FETCHING_API_LOADING });
  axios
      .get(
          `https://api.weatherapi.com/v1/current.json?key=${PUBLIC_KEY}&q=${props}`
      )
      .then((res) => {
        dispatch({ type: FETCHING_API_SUCCESS, payload: res.data });
        console.log(
            "RESOLVED DATA FROM INITIAL API CALL SUCCESSFUL",
            res.data.data
        );
      })
      .catch((err) => {
        dispatch({ type: FETCHING_API_FAILURE, payload: err });
        console.log("API CALL NO_JOY STATUS", err);
      });
};

//search action creator template adjust, public key, .get and res.data.????? as needed
