export default (communities = [], action)=>{
  switch(action.type){
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return[...communities, action.payload];
    case 'LIKE':
      return communities.map((community) => (community.id === action.payload.id ? action.payload : community));
    default:
      return communities;
  }
};
