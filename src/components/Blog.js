import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import CONSTANTS from '../constants';
import { serialize } from '../helpers';

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

    const query = serialize({
      country: 'us'
    });

    axios
      .get(`${CONSTANTS.NEWS_API_URLS.TOP}${query}`, { headers: {...CONSTANTS.NEWS_API_KEY_HEADER} })
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
