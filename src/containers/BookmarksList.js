import React from 'react';
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import { deleteBookmark } from '../actions';

function BookmarksList({ bookmarks, onDelete }) {
  return (
    <div>
      {bookmarks.map(bookmark => {
        return (
          <Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookmarks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteBookmark(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList);