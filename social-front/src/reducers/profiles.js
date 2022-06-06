export default (profiles = [], action)=>{
  switch(action.type){
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_BY_URL':
      return action.payload;
    case 'CREATE':
      return[...profiles, action.payload];
    case 'LIKE':
      return profiles.map((profile) => (profile.id === action.payload.id ? action.payload : profile));
    default:
      return profiles;
  }
};
