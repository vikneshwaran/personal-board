import { CONSTANTS } from '../actions'
let listID = 2
let cardID = 6

const initialState = [
    {
        title: "Project",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'project one'
            },
            {
                id: `card-${1}`,
                text: 'project two'
            }
        ]
    },
    {
        title: "In Progress",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'WIP 1'
            },
            {
                id: `card-${3}`,
                text: 'WIP 2'
            },
            {
                id: `card-${4}`,
                text: 'WIP 3'
            },
            {
                id: `card-${5}`,
                text: 'WIP 4'
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState
        default:
            return state
    }
}

export default listsReducer