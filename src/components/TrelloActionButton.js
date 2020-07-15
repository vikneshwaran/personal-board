import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import { Card, Button } from '@material-ui/core'
import TextArea from 'react-textarea-autosize'

class TrelloActionButton extends Component {
    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    renderActionButton = () => {
        const { list } = this.props
        const buttonText = list ? "add another List" : "add another card"
        const buttonOpacity = list ? 0.5 : 1
        const buttonColor = list ? 'black' : 'inherit'
        const buttonBackgroundColor = list ? 'rgba(0,0,0,0.1)' : 'inherit'


        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonOpacity,
                    color: buttonColor,
                    backgroundColor: buttonBackgroundColor
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props

        const placeHolder = list ? 'Enter list title' : 'Enter card title'
        const buttonTitle = list ? 'Add List' : 'Add Card'

        return (
            <div>
                <Card
                    style={{
                        minHeight: 80,
                        minWidth: 272,
                        padding: '6px 8px 2px'
                    }}
                >
                    <TextArea
                        placeholder={placeHolder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            outline: 'none',
                            border: 'none'
                        }}
                    >
                    </TextArea>
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        variant="contained"
                        style={{
                            color: 'white',
                            backgroundColor: '#5aac44'
                        }}
                    >
                        {buttonTitle}{" "}
                    </Button>
                    <Icon
                        style={{
                            marginLeft: 8,
                            cursor: 'pointer'
                        }}
                    >
                        close
                    </Icon>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderActionButton()
    }
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 272,
        height: 36,
        borderRadius: 3,
        paddinLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default TrelloActionButton
