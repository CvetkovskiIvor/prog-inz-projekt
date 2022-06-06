export default (state = {comments: [] }, action) => {
    switch(action.type){
        case 'COMMENT':
            return {
              ...state,
              comments: state.comments.map((post) => {
                if (post._id === +action.payload._id) {
                  return action.payload;
                }
                return post;
              }),
            };
            
        default:
            return state;
                
    }
};
