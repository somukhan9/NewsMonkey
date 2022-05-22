import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "../Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResult: 0,
      loading: false,
      page: 1,
      pageSize: 6,
      country: "in",
      apiKey: process.env.REACT_APP_API_KEY,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  async updateNews() {
    this.props.setProgress(10);
    this.setState({
      loading: true,
    });
    this.props.setProgress(30);
    const url = `${process.env.REACT_APP_BASE_URL}?country=${this.state.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    const response = await fetch(url);
    this.props.setProgress(60);
    const data = await response.json();
    this.props.setProgress(80);
    this.setState({
      articles: data.articles,
      totalResult: data.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    await this.updateNews();
  }

  fetchMoreData = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      async () => {
        const url = `${process.env.REACT_APP_BASE_URL}?country=${this.state.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;

        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          articles: this.state.articles.concat(data.articles),
        });
        console.log(data.articles);
      }
    );
  };

  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ marginTop: "90px", marginBottom: "20px" }}
        >
          News from{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h1>
        {this.state.loading ? (
          <div className="container d-flex justify-content-center">
            <Spinner />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResult}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((article, index) => (
                  <div className="col-md-4" key={index}>
                    <NewsItem article={article} />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </>
    );
  }
}
