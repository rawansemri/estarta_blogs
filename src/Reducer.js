const initialState = {
    data: [],
    isloaded: false,
    error: null,
    activeBlog: {}
}

function BlogsReducer(state = initialState, action) {

    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isloaded:true
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                isloaded:false,
                data:action.payload
            }
        case "FETCH_FAILD":
            return {
                ...state,
                isloaded:false,
                error:action.payload
            }
        case "GET_SINGLE":
            return {
                ...state,
                isloaded:false,
                activeBlog:action.payload
            }
        case "CLEAN":
            return {
                ...state,
                activeBlog:{}
            }

            default: return state
    }

}

export default BlogsReducer;