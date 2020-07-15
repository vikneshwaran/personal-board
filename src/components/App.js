import React, { Component } from 'react'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { lists } = this.props
    return (
      <div className="App">
        <h1>Personal Board - To Do List</h1>
        <div style={styles.listContainer}>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)