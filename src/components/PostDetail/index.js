import React from 'react';
import './index.css';

class PostDetail extends React.Component {
    state = {
        post: null
    };

    componentDidUpdate(prevProps) {
        if (prevProps.postId !== this.props.postId) {
            fetch(`https://blogback-r9lv.onrender.com/api/posts/${this.props.postId}`)
                .then(response => response.json())
                .then(data => this.setState({ post: data }))
                .catch(error => console.error('Error fetching post details:', error));
        }
    }

    render() {
        const { post } = this.state;
        if (!post) {
            return <div className="post-detail">Select a post to view details.</div>;
        }

        return (
            <div className="post-detail">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p><strong>Summary:</strong> {post.summary}</p>
            </div>
        );
    }
}

export default PostDetail;
