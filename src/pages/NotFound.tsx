import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="error-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="theme-btn mt-4">
              Back to Home <i className="fa-solid fa-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
