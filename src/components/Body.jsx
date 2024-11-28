import React from "react";
 import './Body.css'; // Import custom CSS for Body

function Body() {
  return (
    <section className="body">
      <div className="content">
        <h2>About GNIT</h2>
        <p>GNIT College is one of the best engineering colleges in the region.</p>
        <button className="cta-button animate__animated animate__bounceIn">Learn More</button>
      </div>
    </section>
  );
}

export default Body;
