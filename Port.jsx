import React from 'react'

export default function Port() {
  return (
   <>

  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#">
        Folio
      </a>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Item 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Item 2
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section className="hero" id='Home'>
    <div className="container hero-content">
      <h1>Harshil prajapati</h1>
      <p>I'm Developer</p>
      <div className="social-icons mt-3">
        <a href="#">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="#">
          <i className="bi bi-facebook" />
        </a>
        <a href="#">
          <i className="bi bi-instagram" />
        </a>
        <a href="#">
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  </section>
  
  <section className="about-section" id='About'>
  <div className="container">
  
    <h2 className="about-title">About</h2>
    <div className="row align-items-center">
      <div className="col-lg-5 text-center">
        <div className="img-box">
          <img
            src="https://bootstrapmade.com/content/demo/Folio/assets/img/profile-img.jpg"
            alt="about"
          />
        </div>
      </div>
      
      <div className="col-lg-7 about-content">
        <h2>
          Im a ux /ui designer austin based who loves clean, simple &amp; unique
          design. i also enjoy crafting brand identities, icons, &amp;
          illustration work.
        </h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="about-list mt-4">
          <li>
            <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </li>
          <li>
            <i className="bi bi-check" /> Duis aute irure dolor in reprehenderit
            in voluptate velit.
          </li>
          <li>
            <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
            pariatur.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className="container py-5">
  
  <div className="section-title" id='Services'>
    <h2>Services</h2>
    <p className="text-muted">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem
    </p>
  </div>
  <div className="row g-4">
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-briefcase" />
        </div>
        <h5>Lorem Ipsum</h5>
        <p>
          Voluptatum deleniti atque corrupti quos dolores et quas molestias.
        </p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-card-checklist" />
        </div>
        <h5>Dolor Sitena</h5>
        <p>
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-bar-chart" />
        </div>
        <h5>Sed ut perspiciatis</h5>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-binoculars" />
        </div>
        <h5>Magni Dolores</h5>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-brightness-high" />
        </div>
        <h5>Nemo Enim</h5>
        <p>At vero eos et accusamus et iusto odio dignissimos.</p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="service-box">
        <div className="icon">
          <i className="bi bi-calendar-event" />
        </div>
        <h5>Eiusmod Tempor</h5>
        <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
  </div>
</div>

<section className="section">
  <div className="container">
    <h2>Testimonials</h2>
    <p className="top-text">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
  
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to={0}
          className="active"
        />
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to={1}
        />
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to={2}
        />
      </div>
     
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="testimonial-img"
          />
          <div className="name">Saul Goodman</div>
          <div className="role">Ceo &amp; Founder</div>
          <div className="stars">★★★★★</div>
          <div className="quote">
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus.
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            className="testimonial-img"
          />
          <div className="name">Sara Wilsson</div>
          <div className="role">Designer</div>
          <div className="stars">★★★★★</div>
          <div className="quote">
            Export tempor illum tamen malis malis eram quae irure esse labore
            quem cillum quid.
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            className="testimonial-img"
          />
          <div className="name">John Larson</div>
          <div className="role">Entrepreneur</div>
          <div className="stars">★★★★★</div>
          <div className="quote">
            Enim nisi quem export duis labore cillum quae magna enim sint quorum
            nulla.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 
  <div className="container portfolio-title"id='Portfolio'>
    <h2>Portfolio</h2>
    <p className="text-muted mt-3">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
  </div>
 
  <div className="text-center portfolio-menu my-4">
    <a href="#">All</a>
    <a href="#">App</a>
    <a href="#">Product</a>
    <a href="#">Branding</a>
    <a href="#">Books</a>
  </div>
 
  <div className="container">
    <div className="row g-4">
      {/* APP */}
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
            <div className="overlay">
              <h5>App</h5>
            </div>
          </div>
        </a>
      </div>
     
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" />
            <div className="overlay">
              <h5>Product</h5>
            </div>
          </div>
        </a>
      </div>
     
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" />
            <div className="overlay">
              <h5>Branding</h5>
            </div>
          </div>
        </a>
      </div>
     
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" />
            <div className="overlay">
              <h5>Books</h5>
            </div>
          </div>
        </a>
      </div>
     
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" />
            <div className="overlay">
              <h5>App</h5>
            </div>
          </div>
        </a>
      </div>
    
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" />
            <div className="overlay">
              <h5>Product</h5>
            </div>
          </div>
        </a>
      </div>
      
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" />
            <div className="overlay">
              <h5>Branding</h5>
            </div>
          </div>
        </a>
      </div>
    
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
            <div className="overlay">
              <h5>Books</h5>
            </div>
          </div>
        </a>
      </div>
    
      <div className="col-md-4">
        <a href="#">
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
            <div className="overlay">
              <h5>App</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div
    className="scroll-top"
    onclick="window.scrollTo({top:0,behavior:'smooth'})"
  >
    ↑
  </div>
<div className="container py-5">
  <div className="pricing-title">
    <h1>Pricing</h1>
    <p>
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
  </div>
  <div className="row g-4">
    <div className="col-lg-4">
      <div className="card text-center">
        <h3>Free Plan</h3>
        <p>Ullam mollitia quasi nobis soluta in voluptatum</p>
        <div className="price">
          $0 <small>/ month</small>
        </div>
        <button className="btn btn-custom mt-3">Start a free trial</button>
        <small>No credit card required</small>
        <ul className="mt-4 text-start">
          <li>
            <span className="check">✔</span> Quam adipiscing vitae proin
          </li>
          <li>
            <span className="check">✔</span> Nec feugiat nisl pretium
          </li>
          <li>
            <span className="check">✔</span> Nulla at volutpat diam
          </li>
          <li>✖ Pharetra massa massa ultricies</li>
        </ul>
      </div>
    </div>
   
    <div className="col-lg-4">
      <div className="card text-center position-relative popular">
        <div className="badge-popular">Popular</div>
        <h3>Business Plan</h3>
        <p>Ullam mollitia quasi nobis soluta in voluptatum</p>
        <div className="price text-white">
          $29 <small>/ month</small>
        </div>
        <button className="btn btn-light mt-3">Start a free trial</button>
        <small>No credit card required</small>
        <ul className="mt-4 text-start">
          <li>
            <span className="check">✔</span> Quam adipiscing vitae proin
          </li>
          <li>
            <span className="check">✔</span> Nec feugiat nisl pretium
          </li>
          <li>
            <span className="check">✔</span> Nulla at volutpat diam
          </li>
          <li>
            <span className="check">✔</span> Pharetra massa massa
          </li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="card text-center">
        <h3>Developer Plan</h3>
        <p>Ullam mollitia quasi nobis soluta in voluptatum</p>
        <div className="price">
          $49 <small>/ month</small>
        </div>
        <button className="btn btn-custom mt-3">Start a free trial</button>
        <small>No credit card required</small>
        <ul className="mt-4 text-start">
          <li>
            <span className="check">✔</span> Quam adipiscing vitae proin
          </li>
          <li>
            <span className="check">✔</span> Nec feugiat nisl pretium
          </li>
          <li>
            <span className="check">✔</span> Nulla at volutpat diam
          </li>
          <li>
            <span className="check">✔</span> Pharetra massa massa
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="container py-5">
  <div className="text-center mb-5" id='Contact'>
    <h1>Contact</h1>
    <p className="text-muted">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
  </div>
  <div className="row g-4">
    <div className="col-lg-4">
      <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm info-card">
        <div className="icon-circle me-3">
          <i className="bi bi-geo-alt" />
        </div>
        <div>
          <h5 className="mb-1">Address</h5>
          <p className="mb-0 text-muted">
            A108 Adam Street, New York, NY 535022
          </p>
        </div>
      </div>
    </div>
  
    <div className="col-lg-4">
      <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm info-card">
        <div className="icon-circle me-3">
          <i className="bi bi-telephone" />
        </div>
        <div>
          <h5 className="mb-1">Call</h5>
          <p className="mb-0 text-muted">+1 5589 55488 55</p>
        </div>
      </div>
    </div>
    
    <div className="col-lg-4">
      <div className="d-flex align-items-center bg-white p-4 rounded shadow-sm info-card">
        <div className="icon-circle me-3">
          <i className="bi bi-envelope" />
        </div>
        <div>
          <h5 className="mb-1">Email</h5>
          <p className="mb-0 text-muted">info@example.com</p>
        </div>
      </div>
    </div>
  </div>
 
  <div className="bg-white p-4 rounded shadow-sm mt-5">
    <form>
      <div className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            rows={5}
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        <div className="text-center mt-3">
          <button
            className="btn text-white px-4 btn-send"
            style={{ background: "#c7a97a" }}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

<footer className="py-5 text-center">
  <div className="container">
    <h1 className="mb-3">Folio</h1>
    <p className="text-muted mb-4">
      Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
      fuga maxime saepe commodi placeat.
    </p>
    <div className="d-flex justify-content-center gap-3 mb-4">
      <div className="social-icon">
        <i className="bi bi-twitter-x" />
      </div>
      <div className="social-icon">
        <i className="bi bi-facebook" />
      </div>
      <div className="social-icon">
        <i className="bi bi-instagram" />
      </div>
      <div className="social-icon">
        <i className="bi bi-skype" />
      </div>
      <div className="social-icon">
        <i className="bi bi-linkedin" />
      </div>
    </div>

    <div className="footer-line" />
    <p className="mb-1">
      Copyright <strong>Folio</strong> All Rights Reserved
    </p>
    <p className="text-muted">
      Designed by <span style={{ color: "#b89b72" }}>BootstrapMade</span>
    </p>
  </div>
</footer>

</>
  )
}
