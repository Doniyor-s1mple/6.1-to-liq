export function Lavozimreducer(state = {
    Lavozim: [
        { id: 1, nomi: 'Team Leader', maosh: '1200$' },
        { id: 2, nomi: 'Back End Developer', maosh: '2000$' },
    ],
    data: '',
    search: ''
}, action) {
    switch (action.type) {
        case 'addlavozim':
            var arr = [...state.Lavozim]
            arr.push({
                id: state.Lavozim.length + 1,
                nomi: action.nomi,
                maosh: action.maosh,
            })
            state = { ...state, Lavozim: [...arr] }
            break

        case 'edit':
            state = { ...state, data: action.id }
            break
        case 'editlavozim':
            const l = state.Lavozim.map((item) => {
                if (item.id === state.data.id) {
                    item = {
                        ...item,
                        nomi: action.nomi,
                        maosh: action.maosh,
                    }
                }
                return item

            })
            state = {
                ...state,
                Lavozim: l
            }
            break
        case 'Delete':
            var D = [...state.Lavozim]
            D.splice(action.id, 1)
            state = {
                ...state,
                Lavozim: D,
            }
            break
        case "search":
            state = { ...state, search: action.value }

    }
    return state
}