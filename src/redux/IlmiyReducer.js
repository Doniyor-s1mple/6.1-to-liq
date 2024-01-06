export function IlmiyReducer(state = {
    IlmiyReducer: [
        { id: 1, nomi: 'junior', bonus: 10 },
        { id: 2, nomi: 'Middle', bonus: 20 },
        { id: 3, nomi: 'Senior', bonus: 30 }
    ],
    data: '',
    search: ''
}, action) {
    switch (action.type) {
        case 'addDaraja':
            var arr = [...state.IlmiyReducer]
            arr.push({
                id: state.IlmiyReducer.length + 1,
                nomi: action.nomi,
                bonus: action.bonus,
            })
            state = { ...state, IlmiyReducer: [...arr] }
            break
        case 'Delete':
            var Del = [...state.IlmiyReducer]
            Del.splice(action.id, 1)
            state = {
                ...state,
                IlmiyReducer: Del
            }
            break
        case 'Edit':
            state = { ...state, data: action.id }
            break
        case 'EditDaraja':
            const Daraja = state.IlmiyReducer.map((item) => {
                if (item.id === state.data.id) {
                    item = {
                        ...item,
                        nomi: action.nomi,
                        bonus: action.bonus
                    }
                }
                return item

            })
            state = {
                ...state,
                IlmiyReducer: Daraja
            }
            break
        case 'search':
            state = { ...state, search: action.value }
    }
    return state
}