function Hero() {
  return (
    <section id="home" className="hero-section" data-stellar-background-ratio="0.5">
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/tooplate-style.css" />

      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-12">
            <div className="home-info">
              <h3>professional landing page</h3>
              <h1>We help you manage your website successfully!</h1>
              <form action="" method="get" className="online-form">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="form-control">
                  Get started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
