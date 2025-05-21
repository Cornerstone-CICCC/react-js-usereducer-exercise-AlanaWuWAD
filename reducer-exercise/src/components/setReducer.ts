type Setting ={
    isDark: boolean,
    fSize: number
}

type setAction = {
    type: "toggle" | "increaseSize" | "decreaseSize"
}

export const setReducer = (state:Setting, action:setAction):Setting => {
    switch(action.type){
        case "toggle":
            return {
                ...state,
                isDark: !state.isDark
            }

        case "decreaseSize":
            return {
                ...state,
                fSize: state.fSize -2
            }
        case "increaseSize":
            return {
                ...state,
                fSize: state.fSize +2
            }
        default: state
    }
}

