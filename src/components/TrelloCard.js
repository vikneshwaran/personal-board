import React, { useState } from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Modal from './Modal'
import ModalContent from './ModalContent'

const CardContainer = styled.div`
    margin-bottom: 8px
`

const TrelloCard = ({ text, id, index, desc, listID, dispatch }) => {
    const [isOpen, setIsOpen] = useState(false);

    let modal = (
        <Modal><ModalContent text={text} desc={desc} onClose={() => setIsOpen(!isOpen)} listID={listID} id={id} dispatch /></Modal>
    )
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div>
                    <CardContainer
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Card onClick={() => setIsOpen(!isOpen)}>
                            <CardContent>
                                <Typography>
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardContainer>
                    {isOpen ? modal : null}
                </div>
            )}
        </Draggable>
    )
}
const mapStateToProps = (state) => ({
    lists: state.lists
})

export default connect(mapStateToProps)(TrelloCard)