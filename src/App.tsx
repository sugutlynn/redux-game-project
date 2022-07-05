import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


import  PostsList  from './features/posts/PostsList'
import AddPostForm  from './features/posts/AddPostForm'


function App() {
  return (
    <Router>
      <div className="App">
          
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
          
        
      </div>
    </Router>
  )
}

export default App


