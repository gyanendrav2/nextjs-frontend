const initialState = {
    count: 0,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST": {
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}
