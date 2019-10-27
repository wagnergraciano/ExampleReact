import React from 'react';
import img1 from "../img/img1.png";
import { Link } from 'react-router-dom';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
        <div className="card">
        <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px', height: '100px'}} src={img1} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <Link to={props.link} className="btn btn-primary">{props.title}</Link>
        </div>
        </div>
    </div>
);

export default HomeCard;