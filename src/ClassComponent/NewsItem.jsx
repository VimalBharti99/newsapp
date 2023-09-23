import React, { Component } from 'react'

export default class NewsItem extends Component {
     getDate(date){
        return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
     }
  render() {
    return (
      <>
       <div className=" col-lg-3 col-md-4 col-sm-6">
       <div className="card" >
       <img src={this.props.pic?this.props.pic:"/images/img.jpg"} height="140px" width="100%" className="card-img-top" alt="..."/>
       <div className="card-body">
          <h5 className="card-title">{this.props.title && this.props.title.slice(0,60)+"..."}</h5>
           <div className='d-flex justify-content-between'>
              <p className='source'>{this.props.source}</p>
              <p className='source'>{this.getDate(this.props.date)}</p>
           </div>
          <hr />
          <p className="card-text">{this.props.description && this.props.description.slice(0,250)+"..."}</p>
          <a href={this.props.url} target='_blank' rel='noreferrer' className="btn btn-info btn-sm w-100 ">Read More..</a>
       </div>
       </div>
       </div>
      </>
    )
  }
}

