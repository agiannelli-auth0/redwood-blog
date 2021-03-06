import { Link, routes } from "@redwoodjs/router"
import { useAuth } from "@redwoodjs/auth"

const BlogLayout = ({ children }) => {
  const {logIn, logOut, isAuthenticated, userMetadata} = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>{isAuthenticated ? 'Log Out' : 'Log In'}</button>
            </li>
            {isAuthenticated && <li>{userMetadata.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
