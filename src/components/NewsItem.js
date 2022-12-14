import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            imageurl
              ? imageurl
              : "https://img.etimg.com/thumb/msid-92172620,width-1070,height-580,imgsize-186328,overlay-etmarkets/photo.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <button className="btn btn-dark btn-sm" style={{marginLeft:"calc(50% - 32px)"}}>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
