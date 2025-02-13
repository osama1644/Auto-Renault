import Navbar from "./Navbar";
import "./videos.css"

function Videos() {
  return (
    <>
      <Navbar />
      <div className="videos">
        <div className="container">
          <video controls>
            <source src="/public/WhatsApp Video 2025-02-06 at 21.06.21_7512e34c.mp4" type="video/mp4" />
          </video>
          <video controls>
            <source src="/public/WhatsApp Video 2025-02-06 at 21.06.45_96fbe17a.mp4" type="video/mp4" />
          </video>
          <video controls>
            <source src="/public/WhatsApp Video 2025-02-06 at 21.07.15_cbfe8da2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Videos;
