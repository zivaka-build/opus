import React from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";



class RecentPost extends React.Component {
    state = {
      base_url: "http://34.69.57.206:1337",
      displaypic: "",
      posts: [],
      visible: 5,
    };
  
    loadmore = this.loadmore.bind(this)
      
 
  
    componentDidMount() {
        const root = "http://35.184.242.240:1337";
      
      axios
        .get("http://35.184.242.240:1337/bloglists/6?_sort=post_date:DESC")
        .then(({ data }) => {
          console.log("blogs", data);
          
          const posts = data.blogarticles.map((blog) => {
            const { title, postdate, hashtag, blogintro, category } = blog;
            const createdAt = new Date(Date.parse(postdate)).toDateString();
            return { title, postdate, imgSrc : root + blog.dpimg.formats.thumbnail.url, hashtag, blogintro, category};
          });
  
         
          this.setState({ posts });
         
        })
        .catch(console.error);
    }
  
    loadmore(){
      this.setState((old)=>{
        return {visible: old.visible + 2}
      })
    }
  
    render() {
      console.log(this.state.posts);
      return (
        <div className="bloglist container">
        <section className="blogs-container container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="container recent-posts">
                  <center><h2 className="blog-post-title">Recent Posts</h2></center>
                  <hr />
                  {this.state.posts.slice(0,this.state.visible).map((post) => (
              <div className="col-12 col-md-8 bloglist-card">
                <div className="row">
                  
                  <div className="col-3">
                    
                    <a href>
                      <img
                        className="img-fluid"
                        src={post.imgSrc}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    <p>
                      <span className="bloglist-heading">
                        <a >{post.title}</a>
                      </span>
                      <br />
                      <span className="bloglist-intro">
                        <a href>{post.blogintro}</a>
                      </span>
                      <br />
                      {/* <span className="bloglist-author">
                        <a href>{blog.Author || ""}</a>
                      </span>
                      <br /> */}
                      <span className="bloglist-date">{post.postdate}</span>
                      <br />
                      <span className="bloglist-intro">
                        
                        <a href> <b>&middot;</b>  {post.category} </a>
                      </span>
                      <br />
                    </p>
                  </div>
                </div>
               </div>
                ))}
                <hr />
                <div className="text-center">
                { this.state.visible <= this.state.posts.length &&
                <button type="button" onClick={this.loadmore} className="btn btn-secondary">Load More</button>
                }
                </div>
                
                </div>
                
              </div>
              
              
            </div>
            
          </div>
        </section>
        </div>
      );
    }
  }

export default RecentPost;