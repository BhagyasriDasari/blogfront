import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import './App.css';

class App extends React.Component {
    state = {
        selectedPostId: null,
        refreshPosts: false
    };

    handleSelectPost = (postId) => {
        this.setState({ selectedPostId: postId });
    };

    handlePostAdded = () => {
        this.setState({ refreshPosts: !this.state.refreshPosts });
    };

    render() {
        return (
            <div className="app">
                <Header />
                <div className="main-content">
                    <PostForm onPostAdded={this.handlePostAdded} />
                    <PostList key={this.state.refreshPosts} onSelectPost={this.handleSelectPost} />
                    <PostDetail postId={this.state.selectedPostId} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;