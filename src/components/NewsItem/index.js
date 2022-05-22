import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, urlToImage, url } = this.props.article;
    const defaultImg =
      "https://www.reuters.com/resizer/2F6tCRovuJe4vSrgq7I4DAaOD30=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4HRRTM7F6JO5JOFBDOKIIN55RY.jpg";
    return (
      <div className="card my-4">
        <img
          className="card-img-top"
          src={urlToImage ? urlToImage : defaultImg}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            className="btn btn-dark btn-sm"
            target="_blank"
            href={url}
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
