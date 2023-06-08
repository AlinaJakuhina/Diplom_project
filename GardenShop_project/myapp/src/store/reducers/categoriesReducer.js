const defaultState = [];


const GET_CATEGORY = "GET_CATEGORY";

export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return [...action.payload]

            default:
                return state
    }
}

export const getCategoryAction = (payload) => ({ type: GET_CATEGORY, payload})