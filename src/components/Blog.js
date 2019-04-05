import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('news')) {
      return this.setState({ posts: JSON.parse(localStorage.getItem('news')) });
    }

    axios
      .get(process.env.REACT_APP_NEWS_API_URL, { headers: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY } })
      .then((data) => {
        this.setState({ posts: data.data.articles });
        localStorage.setItem('news', JSON.stringify(data.data.articles));
      });
  }

  render() {
    let postId = 0;
    return (
      <div className="App">
        <div className="blog">
          {this.state.posts.map((post) => (
            <Post key={postId++} {...post} />
          ))}
        </div>
      </div>
    );
  }
}
