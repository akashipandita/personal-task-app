import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={LandingPage} />
          <Route path="/posts/:id" component={DetailPage} />
          <Route path="/add" exact component={CreatePost} />
          <Route path="/edit/:id" exact component={EditPost} />
        </div>
      </BrowserRouter>
      // <div className="container">
      //   <p>All Post</p>
        

      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th scope="col">#</th>
      //         <th scope="col">Title</th>
      //         <th scope="col">Description</th>
      //         <th scope="col">Category</th>
      //         <th scope="col">Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {/* {this.state.posts.map(post=>(
      //     <div>
      //       <p>{post.title}</p>
      //       <p>{post.description}</p>
      //       <p>{post.postCategory}</p>
      //     </div>
      //   ))} */}
      //   {this.state.posts.map((post,index)=>(
      //       <tr>
      //         <th scope="row">{index}</th>
      //         <td>{post.title}</td>
      //         <td>{post.description}</td>
      //         <td>{post.postCategory}</td>
      //         <td>
      //           <a className="btn btn-warning" href="#">
      //             <i className="fas fa-edit"></i>&nbsp;Edit
      //           </a>
      //           &nbsp;
      //           <a className="btn btn-danger" href="#">
      //             <i className="far fa-trash-alt"></i>&nbsp;Delete
      //           </a>
      //         </td>
      //       </tr>
      //   ))}
      //     </tbody>
      //   </table>
      // </div>
    )
  }
}

export default App;
