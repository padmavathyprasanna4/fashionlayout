import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import image1 from "/fashionimages/aboutimages/about1.jpg";

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* TOP PINK HEADER */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h4 className="about-hero-title">About Us</h4>
        </div>
      </section>

      {/* CENTER TEXT */}
      <section className="about-intro">
        <div className="container text-center">
          <p className="about-intro-title">
            CELEBRATE LIFE’S SPECIAL MOMENTS WITH HANVIKA’S COLLECTION
          </p>
          <p className="about-intro-sub">
            From dazzling statement pieces to delicate everyday adornments, our
            jewellery is crafted to make you shine.
          </p>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* Left image */}
            <div className="about-image-wrap">
              <img
                src="image1"
                alt="Hanvi Collections"
                className="about-image"
              />
            </div>

            {/* Right text */}
            <div className="about-text">
              <h2 className="about-heading">
                About <br />
                Hanvi Collections
              </h2>

              <p>
                At Hanvi Collections, we bring you a timeless blend of
                elegance, craftsmanship, and style. Our jewellery and fashion accessories are designed to
                celebrate every moment, from everyday wear to the most special
                occasions. Inspired by tradition and enhanced by modern artistry,
                each piece reflects a story of sophistication and love.
              </p>

              <p>
                Hanvi Collection offers an exquisite range of jewellery,dresses and
                fashion accessories including necklaces, earrings, bracelets, rings, and
                custom-designed pieces. Whether you prefer classic gold,
                contemporary silver, or sparkling gemstones, our collection
                caters to every taste. Perfect for weddings, parties, or casual
                outings, our jewellery promises to add a touch of glamour to your
                ensemble.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
