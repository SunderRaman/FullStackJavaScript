const defaultState = {
    posts:[],
    postCount: 0,
    post:{}
}

const site = (state = defaultState, action) => {
    /* console.log("Site reducer is called :", state); */
    switch(action.type) {
        case 'GOT_POST_COUNT' :
            return {
                ...state,
                postCount: action.payload
            }
        case 'SET_DEFAULT_POST_DATA' :
             return{
                 ...state,
                 post: action.payload
             } 
        case 'SET_FULL_POST_DATA' :
            return {
                ...state,
                post: {
                    ...state.post,
                    ...action.payload
                }
            }        
        case 'GOT_SITE_POSTS' : 
            return {
                ...state,
                posts: action.skip ? state.posts.concat(action.payload):action.payload
            }
        case 'ADDED_COMMENT' :
            return {
                ...state,
                post:{
                    ...state.post,
                    Comments: state.post.Comments.concat(action.payload)    
                }

            }    
        default:
            return state;    
    }

}

export default site;