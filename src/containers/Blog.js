import { connect } from 'react-redux';
import { viewPost } from '../actions';
import PostsList from '../components/PostsList';

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => {
      dispatch(viewPost(id));
    },
  };
};

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

export default Blog;