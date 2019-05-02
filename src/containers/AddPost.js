import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions'

let AddPost = ({ dispatch }) => {
  const inputRef = React.createRef();

  return (
    <div className="add-post">
      <input 
        ref={inputRef} 
        type="text" 
        name="title" 
        placeholder="Enter a post title" 
      />
      <button
        onClick={() => {
          dispatch(addPost(inputRef.current.value));
          inputRef.current.value = '';
        }}
        type="button"
      >
        Add post
      </button>
    </div>
  );
};

AddPost = connect()(AddPost);

export default AddPost;
