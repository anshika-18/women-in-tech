import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Testimonial.scss";
import axios from "axios";
import { Audio, ThreeDots } from "react-loader-spinner";
import user from "../../Images/user.png";

export default function Testimonial() {
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    axios
      .get("https://witbackend.vercel.app/testimonials/getFeedback")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="testimonials">
      <div class="testimonials-head home-head">What Our Mentees Say</div>

      <div class="testimonials-main">
        {data.length != 0 ? (
          <>
            {data.map((curr) => {
              return (
                <div class="testimonials-card">
                  <div class="user-image">
                    {!curr.image ? (
                      <img src={user} alt="1635226713991" border="0" />
                    ) : (
                      <img src={curr.image} alt="1635226713991" border="0" />
                    )}
                  </div>
                  <div class="testimonial-content">
                    <p>{curr.feedback}</p>
                    <div class="user-name">
                      <b>~ {curr.name}</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="loader">
            <ThreeDots
              height="50"
              width="50"
              radius="5"
              color="#7f4ca5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
