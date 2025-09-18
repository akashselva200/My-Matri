import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/PhotoToggleTable.css"; // updated CSS with animation

function ProfileFullViewphoto({ userId: propUserId }) {
  const [visibleImage, setVisibleImage] = useState(1);
  const params = useParams();

  // Resolve id: prop -> route param -> localStorage -> empty
  const id = (
    propUserId ||
    params?.id ||
    localStorage.getItem("loggedUserId") ||
    ""
  )
    .toString()
    .trim();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImage((prev) => (prev === 1 ? 2 : 1));
    }, 5000); // 🔥 every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (!id) {
    // no id available — placeholder
    return (
      <div style={{ width: 227, textAlign: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL || ""}/photos/default.jpg`}
          alt="No Profile"
          style={{ width: "227px", border: "1px solid #3A2BDF" }}
        />
      </div>
    );
  }

  const defaultPhoto = `${process.env.PUBLIC_URL || ""}/photos/default.jpg`;
  const photoUrl1 = `${process.env.PUBLIC_URL || ""}/photos/${id}_1.jpg`;
  const photoUrl2 = `${process.env.PUBLIC_URL || ""}/photos/${id}_2.jpg`;

  const handleImgError = (e) => {
    if (e?.target) e.target.src = defaultPhoto;
  };

  return (
    <table>
      <tbody>
        <tr>
          <td align="center" style={{ width: "auto", textAlign: "center" }}>
            <div
  className="photo-flip-container"
  style={{
    position: "relative",
    width: 227,
    display: "inline-block",
    textAlign: "center",
  }}
>
  {/* Photos stacked for fade animation */}
  <div style={{ position: "relative", width: "227px", height: "300px" }}>
    <img
      src={photoUrl1}
      alt={`${id} photo 1`}
      onError={handleImgError}
      className={`photo-image ${visibleImage === 1 ? "show" : "hide"}`}
    />

    <img
      src={photoUrl2}
      alt={`${id} photo 2`}
      onError={handleImgError}
      className={`photo-image ${visibleImage === 2 ? "show" : "hide"}`}
    />
  </div>

  {/* ✅ Buttons placed BELOW the image */}
  <div className="photo-buttons">
    <input
      type="image"
      src={`${process.env.PUBLIC_URL || ""}/images/PageBtn.png`}
      alt="1"
      className={`nav-btn ${visibleImage === 1 ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setVisibleImage(1);
      }}
    />
    <input
      type="image"
      src={`${process.env.PUBLIC_URL || ""}/images/PageBtn2.png`}
      alt="2"
      className={`nav-btn ${visibleImage === 2 ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setVisibleImage(2);
      }}
    />
  </div>
</div>


          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfileFullViewphoto;
