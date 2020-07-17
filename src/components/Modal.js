import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { Provider } from 'react-redux'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: fixed;
    top: 100px;
    left: 100px;
    right: 100px;
    bottom: 100px;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    display: block;
`

class Modal extends Component {

    componentDidMount() {
        this.modalTarget = document.createElement('div')
        this.modalTarget.className = 'Modal'
        document.body.appendChild(this.modalTarget)
        this._render()
    }

    _render() {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ModalContainer>
                        {this.props.children}
                    </ModalContainer>
                </div>
            </Provider>,
            this.modalTarget
        )
    }

    componentDidUpdate() {
        this._render()
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    render() {
        return (
            <noscript />
        )
    }
}

export default Modal
