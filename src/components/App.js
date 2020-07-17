import React, { Component } from 'react'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from 'styled-components'


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`
class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )


  }
  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1 style={{ 'color': '#086972' }}>Personal Board - To Do List</h1>
          <ListContainer>
            {lists.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)