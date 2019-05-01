import { connect } from 'react-redux';
import { viewPost } from '../actions';
import PostsList from '../components/PostsList';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  onPostClick(id) {
    dispatch(viewPost(id));
  },
});

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);

export default Blog;
