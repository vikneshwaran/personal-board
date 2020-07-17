import { CONSTANTS } from '../actions'
let listID = 2
let cardID = 6

const initialState = [
    {
        title: "Backlog",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'Practical Presentation'
            },
            {
                id: `card-${1}`,
                text: 'Patch Updates'
            }
        ]
    },
    {
        title: "This Week ( w/c 17th July )",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'Update swipe components'
            },
            {
                id: `card-${3}`,
                text: 'Release request'
            },
            {
                id: `card-${4}`,
                text: 'Add a looping animation'
            },
            {
                id: `card-${5}`,
                text: 'Documentation for project'
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

        case CONSTANTS.ADD_CARD: {
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
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd
            } = action.payload

            const newState = [...state]

            // in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // in the different list
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id)
                const card = listStart.cards.splice(droppableIndexStart, 1)
                const listEnd = state.find(list => droppableIdEnd === list.id)
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState


        default:
            return state
    }
}

export default listsReducer