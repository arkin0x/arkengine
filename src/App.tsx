import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IdentityProvider } from './providers/IdentityProvider.tsx'
import { Intro } from './components/Intro'
import { Home } from './components/Home'
import { Login } from './components/Login'
import './scss/App.scss'

const ProblemTree = () => <h1>Problem Tree</h1>
const IdentityTree = () => <h1>Identity Tree</h1>

const router = createBrowserRouter([
  { path: '/', element: <Intro/> },
  { path: '/home', element: <Home/> },
  { path: '/problemtree', element: <ProblemTree/> },
  { path: '/identitytree', element: <IdentityTree/> },
])


function App() {

  return (
    <div id="component-app">
      <IdentityProvider>
        <RouterProvider router={router}/>
      </IdentityProvider>
    </div>
  )
}

export default App
