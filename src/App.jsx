import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
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

function App() {
  const navigate = useNavigate();
  // VARIABILI DI STATO
  // Lista Post
  const [postsList, setPostsList] = useState([]);
  // Tags
  const [tagsList, setTagsList] = useState([])

  // USE EFFECTS
  // Show Posts
  useEffect(() => getPosts(), [filter])
  // Show Tags
  useEffect(() => getTags(), [])

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
      .catch((err) => { err.status === 404 && navigate("/not-found") })
  }

  // Get Tags
  const getTags = () => {
    axios.get(`${apiUrl}/tags`)
      .then((resp) => {
        setTagsList(resp.data.tags)
      })
      .catch((err) => { err.status === 404 && navigate("/not-found") })
  }

  // Context Provider Value
  const globalProviderValue = {
    postsList,
    tagsList
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