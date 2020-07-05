import React from "react";

class SingleBlog extends React.Component {
  render() {
    return (
      <section className="blog-container">
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-7 col-xs 12 main-blog-content container">
              <article>
                <header>
                  <h2 className="blog-post-title">ENTITLEMENT AND PRIVILEGE</h2>
                  <p className="blog-post-meta">
                    <i className="far fa-clock" /> June 2, 2020 &nbsp;
                    <i className="fas fa-user" /> Richard Rozario &nbsp;
                    <i className="far fa-folder-open" /> Issues Ins and Out
                    &nbsp;
                    <i className="fas fa-tags" /> achievers, entitlement,
                    hardwork, privilege, reservation
                  </p>
                </header>
                <figure>
                  <img
                    src="https://dsim.in/blog/wp-content/uploads/2019/09/skill-shop.png"
                    alt
                  />
                  <figcaption>Caption for the image</figcaption>
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  veniam soluta commodi quisquam omnis, illum dolore adipisci
                  rerum iure nisi vero cum magni, ut nam, tenetur optio vitae.
                  Maiores, illo. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maiores quisquam hic perspiciatis nesciunt
                  ipsum sed, provident assumenda, nam omnis error eos magnam
                  modi consequatur temporibus ab veritatis voluptatem
                  exercitationem minima. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum, commodi? Modi aut ipsum hic deleniti
                  quod, accusamus tenetur facilis, vitae aliquid voluptatibus
                  repellat illo nihil, corporis reiciendis inventore velit
                  optio.
                </p>
                <a href>Read More →</a>
              </article>
            </div>
            <div className="col-lg-4 recent-posts">
              <div className="container">
                <h3 className="blog-post-title">Recent Posts</h3>
                <hr />
                <ul>
                  <li>
                    <a href>Entitlement and Privilege June 2, 2020</a>
                  </li>
                  <li>
                    <a href>
                      Gender Stereotyping – A mother’s Angst May 31, 2020
                    </a>
                  </li>
                  <li>
                    <a href>Death May 29, 2020</a>
                  </li>
                  <li>
                    <a href>
                      A personal Reckoning – In the Sunderbans May 25, 2020
                    </a>
                  </li>
                  <li>
                    <a href>Entitlement and Privilege June 2, 2020</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleBlog;
