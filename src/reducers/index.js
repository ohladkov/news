import { combineReducers } from 'redux';

const initialState = [
  {
    kind: 'blogger#post',
    id: '7345193987064476834',
    blog: {
      id: '2399953',
    },
    published: '2019-01-30T18:01:00-08:00',
    updated: '2019-01-30T18:03:34-08:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNTQ4OTAwMjE0ODEwCm9mZnNldDogLTI4ODAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2019/01/an-update-on-google-and-blogger.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7345193987064476834',
    title: 'An update on Google+ and Blogger',
    author: {
      id: '07192172642077960940',
      displayName: 'A Googler',
      url: 'https://www.blogger.com/profile/07192172642077960940',
      image: {
        url: '//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7345193987064476834/comments',
    },
  },
  {
    kind: 'blogger#post',
    id: '847065355310893195',
    blog: {
      id: '2399953',
    },
    published: '2018-05-15T09:22:00-07:00',
    updated: '2018-05-15T09:22:19-07:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNTI2NDAxMzM5NzEzCm9mZnNldDogLTI1MjAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2018/05/its-spring-cleaning-time-for-blogger.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/847065355310893195',
    title: 'It’s spring cleaning time for Blogger',
    author: {
      id: '06022537168026948167',
      displayName: 'Blogger',
      url: 'https://www.blogger.com/profile/06022537168026948167',
      image: {
        url: '//4.bp.blogspot.com/-6RfTUjHlrJc/UbA13iUjSYI/AAAAAAAAABk/ot_-wjD-AQk/s28/blogger.jpg',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/847065355310893195/comments',
    },
  },
  {
    kind: 'blogger#post',
    id: '2731320382187546485',
    blog: {
      id: '2399953',
    },
    published: '2017-03-20T17:34:00-07:00',
    updated: '2017-03-20T17:34:06-07:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNDkwMDU2NDQ2MDY5Cm9mZnNldDogLTI1MjAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2017/03/share-your-unique-style-with-new.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/2731320382187546485',
    title: 'Share your unique style with new Blogger themes',
    author: {
      id: '06022537168026948167',
      displayName: 'Blogger',
      url: 'https://www.blogger.com/profile/06022537168026948167',
      image: {
        url: '//4.bp.blogspot.com/-6RfTUjHlrJc/UbA13iUjSYI/AAAAAAAAABk/ot_-wjD-AQk/s28/blogger.jpg',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/2731320382187546485/comments',
    },
  },
  {
    kind: 'blogger#post',
    id: '2481891409112513396',
    blog: {
      id: '2399953',
    },
    published: '2016-11-22T18:24:00-08:00',
    updated: '2016-11-22T18:39:37-08:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNDc5ODY4Nzc3OTQ0Cm9mZnNldDogLTI4ODAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2016/11/a-first-few-tweaks-toward-better-blogger_22.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/2481891409112513396',
    title: 'A first few tweaks toward a better Blogger',
    author: {
      id: '07192172642077960940',
      displayName: 'A Googler',
      url: 'https://www.blogger.com/profile/07192172642077960940',
      image: {
        url: '//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/2481891409112513396/comments',
    },
  },
  {
    kind: 'blogger#post',
    id: '6241485945632143555',
    blog: {
      id: '2399953',
    },
    published: '2016-05-24T16:36:00-07:00',
    updated: '2016-07-10T18:40:27-07:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNDY4MjAxMjI3NjI3Cm9mZnNldDogLTI1MjAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2016/05/more-custom-template-flexibility.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6241485945632143555',
    title: 'More custom template flexibility',
    author: {
      id: '07192172642077960940',
      displayName: 'A Googler',
      url: 'https://www.blogger.com/profile/07192172642077960940',
      image: {
        url: '//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6241485945632143555/comments',
    },
  },
  {
    kind: 'blogger#post',
    id: '4128093006481917913',
    blog: {
      id: '2399953',
    },
    published: '2016-05-06T10:56:00-07:00',
    updated: '2016-05-06T10:56:21-07:00',
    etag: '"iHf3yWDE_geBgZ8U7rgZ_xuTeAQ/dGltZXN0YW1wOiAxNDYyNTU3MzgxMTQ2Cm9mZnNldDogLTI1MjAwMDAwCg"',
    url: 'http://blogger.googleblog.com/2016/05/keep-your-readers-interested-with.html',
    selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/4128093006481917913',
    title: 'Keep your readers interested with the AdSense Guide to Audience Engagement',
    author: {
      id: '15263398208175969722',
      displayName: 'A Googler',
      url: 'https://www.blogger.com/profile/15263398208175969722',
      image: {
        url: '//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35',
      },
    },
    replies: {
      totalItems: '0',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/2399953/posts/4128093006481917913/comments',
    },
  },
];

const post = (state, action) => {
  switch (action.type) {
    case 'VIEW_POST':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        isViewed: true,
      };

    default:
      return state;
  }
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_POST':
      return state.map((p) => post(p, action));

    default:
      return state;
  }
};

export default combineReducers({
  posts,
});
