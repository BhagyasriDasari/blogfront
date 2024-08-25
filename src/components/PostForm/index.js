import React from 'react';
import './index.css';

class PostForm extends React.Component {
    state = {
        title: '',
        content: '',
        summary: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, content, summary } = this.state;

        fetch('https://blogback-r9lv.onrender.com/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, summary })
        })
            .then(response => response.json())
            .then(data => {
                this.props.onPostAdded();
                this.setState({ title: '', content: '', summary: '' });
            })
            .catch(error => console.error('Error creating post:', error));
    };

    render() {
        return (
            <form className="post-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    name="summary"
                    placeholder="Summary"
                    value={this.state.summary}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">Create Post</button>
            </form>
        );
    }
}

export default PostForm;
