    export default (posts = [], action)=>{
        switch(action.type){
            case 'FETCH_ALL':
                return action.payload;
            case 'CREATE':
                return[...posts, action.payload];
            case 'LIKE':
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            case 'DISLIKE':
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            case 'COMMENT':
                return {
                    posts: state.posts.map((post) => {
                    if (post._id === +action.payload._id) {
                        return action.payload;
                    }
                    return post;
                    }),
                };
            case 'FETCH_POST':
                return { ...state, post: action.payload.post };
                
            default:
                return posts;
                    
        }
    };
