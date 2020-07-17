import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteCard } from '../actions'

const CloseButton = styled.div`
    position: absolute;
    top: 30px;
    right:30px;
`
const DeleteButton = styled.div`
    position: absolute;
    bottom: 30px;
    right:30px;
`
class ModalContent extends Component {
    render() {
        const { text, desc } = this.props
        return (
            <>
                <CloseButton>
                    <IconButton
                        aria-label="close"
                        color="secondary"
                        onClick={this.props.onClose}
                    >
                        <CloseIcon />
                    </IconButton>

                </CloseButton>

                <h1>{text}</h1>
                <p>{desc}</p>
                <DeleteButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        startIcon={<DeleteIcon />}
                        onClick={this.props.onClose}
                    >
                        Delete Card
                </Button>
                </DeleteButton>

            </>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteCard: (id) => { dispatch(deleteCard(id)) }
//     }
// }

export default connect()(ModalContent)
