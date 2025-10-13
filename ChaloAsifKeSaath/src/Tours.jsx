import React from "react";
import deosai from "./assets/deosai.jpg";
import nar1 from "./assets/nar1.gif";
import swat from "./assets/swat.avif";
import pesh1 from "./assets/pesh1.jpeg";
import kalam from "./assets/kalam.png";
import mult1 from "./assets/mult1.jpg";
import lah1 from "./assets/lah1.avif";
import pic2 from "./assets/pic2.avif";
import pic1 from "./assets/pic1.avif";
import isl1 from "./assets/isl1.avif";
import kar1 from "./assets/kar1.avif";
import swat1 from "./assets/swat1.avif";
// import "bootstrap/dist/css/bootstrap.min.css";

function Tours() {
  const tourData = [
    { image: deosai, title: "Hunza Valley Tour", desc: "Hunza Valley tour packages" },
    { image: nar1, title: "Naran Valley", desc: "Naran Valley tour packages" },
    { image: swat1, title: "Neelum valley", desc: "Neelum valley tour packages" },
    { image: pesh1, title: "Peshawar City", desc: "Peshawar tour packages" },
    { image: mult1, title: "Multan Tour", desc: "Multan tour packages" },
    { image: swat, title: "Swat Valley Tours", desc: "Swat Valley tour packages" },
    { image: kalam, title: "Kalam Valley Tours", desc: "Kalam tour packages" },
    { image: pic1, title: "Muree", desc: "Muree tour packages" },
    { image: pic2, title: "chitral valley", desc: "Chitral valley tour packages" },
    { image: lah1, title: "Lahore city", desc: "Lahore tour packages" },
    { image: isl1, title: "Islamabad city", desc: "islamabad tour packages" },
    { image: kar1, title: "Karachi city", desc: "Karachi city tour packages" },
  ];  

  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">Pakistan Tours in Exotic Holiday Destinations</h2>
      </div>

      <div className="row">
        {tourData.map((tour, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100" style={{ width: "100%", height: "380px" }}>
              <img
                src={tour.image}
                className="card-img-top"
                alt={tour.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{tour.title}</h5>
                  <p className="card-text">{tour.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}

export default Tours;