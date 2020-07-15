const initialState = [
    {
        title: "Project",
        id: 0,
        cards: [
            {
                id: 0,
                text: 'project one descrption'
            },
            {
                id: 1,
                text: 'project two description'
            }
        ]
    },
    {
        title: "In Progress",
        id: 1,
        cards: [
            {
                id: 0,
                text: 'project one descrption'
            },
            {
                id: 1,
                text: 'project two description'
            },
            {
                id: 2,
                text: 'project three description'
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default listsReducer