    export default (posts = [], action)=>{
        switch(action.type){
            case 'FETCH_ALL':
                return action.payload;
            case 'CREATE':
                return[...posts, action.payload];
            case 'LIKE':
                return posts.map((post) => (post.id === action.payload._id ? action.payload : post));
            default:
                return posts;
                    
        }
    };
