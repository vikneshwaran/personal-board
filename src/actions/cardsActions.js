import { CONSTANTS } from './index'

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { listID, text }
    }
}

export const deleteCard = (id) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { id }
    }
}