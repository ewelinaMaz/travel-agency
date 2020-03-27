/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  
  // TODO - filter by duration
  //else if(filters.duration){
    //const patternDays = new RegExp(filters.searchPhrase, 'i')
    //output = output.filter(trip =>patternDays.test(trip.days));
  //}
  // TODO - filter by tags
  //else if (filters.time){
    //const tagFilter = new RegExp(filters.searchPhrase, 'i');
    //output = output.filter(trip => tagFilter.test(trip.tag));
  //}
  // TODO - sort by cost descending (most expensive goes first)
  //else if (filters.cost){
    //const costFilter = new RegExp(filters.searchPhrase, 'i');
    //output = output.filter(trip => costFilter.test(trip.cost));
  //}
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;
  trips.filtered (trip => trip.id == tripId); 
  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;
  trips.filtered(trip => trip.country.code == countryCode);
  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
