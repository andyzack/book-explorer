import React, { Component } from 'react';
import Picture from '../picture-1.svg';



class Gallery extends Component {
  render() {
    return (
      <div>
        {
          this.props.items.map(
            (items, index) => {
              let {title, imageLinks, infoLink} = items.volumeInfo;
              return (
                <a
                  key={index}
                  className="book"
                  href={ infoLink }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img
                      src={imageLinks !== undefined? imageLinks.thumbnail : Picture}
                      alt="{ title }"
                      className="book-img"
                    />
                    <span className="book-title">{ title }</span>
                </a>
              )
            }
          )
        }
      </div>
    )
  }
}

export default Gallery;