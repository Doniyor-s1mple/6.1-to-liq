export function XodimlarReducer(state = {
    Xodimlar: [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            phone: 9090,
            lavozim: 'developer',
            ilmiy_daraja: 'junior',
        },

        {
            id: 2,
            firstname: 'John1',
            lastname: 'Doe1',
            phone: 9090,
            lavozim: 'developer',
            ilmiy_daraja: 'junior',
        },

        {
            id: 3,
            firstname: 'John2',
            lastname: 'Doe2',
            phone: 9090,
            lavozim: 'developer',
            ilmiy_daraja: 'junior',
        },
    ],
    data: '',
    search:''
}, action) {
    switch (action.type) {
        case 'addUser':
            var arr = [...state.Xodimlar]
            arr.push({
                id: state.Xodimlar.length + 1,
                firstname: action.firstname,
                lastname: action.lastname,
                phone: action.phone,
                lavozim: action.lavozim,
                ilmiy_daraja: action.ilmiy_daraja,
            })
            state = { ...state, Xodimlar: [...arr] }
            break
        case 'delete':
            var D = [...state.Xodimlar]
            D.splice(action.id, 1)
            state = {
                ...state,
                Xodimlar: D
            }
            break
        case "edit":
            state = { ...state, data: action.item }
            break
        case 'editItem':
            const a = state.Xodimlar.map((item) => {
                if (item.id === state.data.id) {
                    item = {
                        ...item,
                        firstname: action.firstname,
                        lastname: action.lastname,
                        phone: action.phone,
                        lavozim: action.lavozim,
                        ilmiy_daraja: action.ilmiy_daraja,
                    }
                }
                return item
            })
            state = {
                ...state,
                Xodimlar: a
            }
            break
            case 'search':
                state={...state, search:action.value}
            break

        }
    return state
}