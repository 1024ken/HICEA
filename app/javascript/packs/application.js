/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    posts: []
  }
  /** Formが作成した投稿を保存する処理 */
  saveNewPost(newPost) { // （2）
    // 投稿にidを付与する
    const newPostWithId = {
      ...newPost,
      id: Date.now()
    }
    // state内の投稿リストに加える
    this.setState({
      posts: [...this.state.posts, newPostWithId] // （4）
    });
  }
  render() {
    return (
      <div className="App">
        <Form
          onSubmitNewPost={
            (newPost) => this.saveNewPost(newPost) // （1）
          } />
        <hr />
        <List
          posts={this.state.posts} /> {/* （3） */}
      </div>
    );
  }
}

export default App;

console.log('Hello World from Webpacker')
