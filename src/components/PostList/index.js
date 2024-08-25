import React from 'react';
import './index.css';

class PostList extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        fetch('https://blogback-r9lv.onrender.com/api/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error('Error fetching posts:', error));
    }

    render() {
        return (
            <div className="post-list">
                <h2>Posts</h2>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id} onClick={() => this.props.onSelectPost(post.id)}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostList;
