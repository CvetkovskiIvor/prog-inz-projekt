    export default (posts = [], action)=>{
        switch(action.type){
            case 'FETCH_ALL':
                return action.payload;
            case 'FETCH_BY_CREATOR':
                return action.payload;
            case 'CREATE':
                return[...posts, action.payload];
            case 'LIKE':
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            case 'DISLIKE':
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            default:
                return posts;
                    
        }
    };
