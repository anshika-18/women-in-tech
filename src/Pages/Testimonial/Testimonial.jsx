import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Testimonial.scss";
import axios from "axios";
import { Audio, ThreeDots } from "react-loader-spinner";

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
      <div class="testimonials-head">WHAT OUR MENTEES SAY</div>

      <div class="testimonials-main">
        {data.length != 0 ? (
          <>
            {data.map((curr) => {
              return (
                <div class="testimonials-card">
                  <div class="user-image">
                    <img
                      src="https://i.ibb.co/cTxbjBM/1635226713991.jpg"
                      alt="1635226713991"
                      border="0"
                    />
                  </div>
                  <div class="testimonial-content">
                    <p>
                      I loved the interaction classes provides and overview of
                      the particular that to be done in the class with that the
                      sessions and support through the community to participants
                      is commendable. It actually gives me insight of what
                      should and how should I do further.
                    </p>
                    <div class="user-name">
                      <b>~ Anonymous</b>
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
