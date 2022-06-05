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
            case 'LIKE_SELECTED':
                return action.payload;
            // case 'COMMENT':
            //     return posts.posts.map((post) => (post._id === +action.payload._id ? action.payload : post));
            case 'FETCH_POST':
                return action.payload;
                
            default:
                return posts;
                    
        }
    };
