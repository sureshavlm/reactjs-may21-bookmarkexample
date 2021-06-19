import React, { Component } from 'react';
import AddBookmark from './containers/AddBookmark';
import BookmarksList from './containers/BookmarksList';

class App extends Component {
  render() {
    return (
      <div>
        <AddBookmark />
        <BookmarksList />
      </div>
    );
  }
}

export default App;