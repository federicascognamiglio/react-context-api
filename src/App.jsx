import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';
// Contexts
import GlobalContext from "./contexts/GlobalContext"
// Pages
import AppLayout from "./components/AppLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostsPage from "./pages/posts/PostsPage"
import CreatePostPage from "./pages/posts/CreatePostPage"
import SinglePostPage from "./pages/posts/SinglePostPage"
import NotFoundPage from "./pages/NotFoundPage"
// API Url
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  // VARIABILI DI STATO
  // Lista Post
  const [postsList, setPostsList] = useState([]);
  // Tags
  const [tagsList, setTagsList] = useState([])
  // Filter 
  const [filter, setFilter] = useState("all");

  // FUNCTIONS
  // Get Posts
  const getPosts = () => {
    let url = `${apiUrl}/posts`

    if (filter !== "all") {
      url += `?tag=${filter}`;
    }

    axios.get(url)
      .then((resp) => {
        setPostsList(resp.data)
      })
  }

  // Get Tags
  const getTags = () => {
    axios.get(`${apiUrl}/tags`)
      .then((resp) => {
        setTagsList(resp.data.tags)
      })
  }

  // Context Provider Value
  const globalProviderValue = {
    getPosts,
    getTags,
    filter,
    setFilter,
    postsList,
    setPostsList,
    tagsList,
    apiUrl
  };

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <BrowserRouter >
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts">
              <Route index element={<PostsPage />} />
              <Route path="create" element={<CreatePostPage />} />
              <Route path=":id" element={<SinglePostPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App