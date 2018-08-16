import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { news: null };
  }

  componentDidMount() {
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  toFormattedDate(unixTimestamp) {
    const dt = new Date(unixTimestamp * 1);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const date = "0" + dt.getDate();
    const hour = "0" + dt.getHours();
    const min = "0" + dt.getMinutes();
    const sec = "0" + dt.getSeconds();
    const time = date.substr(-2) + ' ' + month + ' ' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2) ;
    return time;
  }

  render() {
    return (
      <div>
        <img src={ReactImage} width="30%" alt="react" />
        {this.state.news && this.state.news.length > 0 ? (
          <div>
          {this.state.news.map(e =>
            (
              <div>
                <h2>
                  {e.title}
                </h2>
                <div>
                  {this.toFormattedDate(e.publishedAt)}
                </div>
                <div>
                  <a href={e.link}>
                    {e.link}
                  </a>
                </div>
                <div>
                  {e.tags ? (
                    <div>
                      tags:
                      {e.tags.map(tag =>
                        <span> {tag} </span>
                      )}
                    </div>
                   ) : (
                    <span>No tags</span>
                  )}
                </div>
                <br/>
              </div>
            )
          )
          }
          </div>
        ) : (
          <h1>No news</h1>
        )}
      </div>
    );
  }
}
