import React from "react";
import loc from "../img/loc.png";
export default function Card(props) {
  return (
    <div className="container">
      <div className="cards">
        <img className="card--img" src={props.item.imageUrl} alt="" />
        <div className="cards--container">
          <div className="cards--top">
            <img className="card-loc-logo" src={loc} alt="" />
            <h5 className="loc">{props.item.location}</h5>
            <a href={props.item.googleMapsUrl}> View on google maps</a>
          </div>
          <div className="cards--body">
            <h2 className="">{props.item.title}</h2>
            <h5 className="">{`${props.item.startDate} - ${props.item.endDate}`}</h5>
            <text className="">{props.item.description}</text>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description:
//       "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
//   }
