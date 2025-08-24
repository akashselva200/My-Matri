import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/PhotoToggleTable.css'; // we'll add css here

function PhotoToggleTable() {
  const [visibleImage, setVisibleImage] = useState(1);
  const { id } = useParams();

  const photoUrl1 = `/photos/${id}_1.jpg`;
  const photoUrl2 = `/photos/${id}_2.jpg`;

  // Auto-switch the visible image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImage(prev => (prev === 1 ? 2 : 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <td align="center" style={{ width: 'auto', textAlign: 'center' }}>
            <div className="photo-flip-container">
              <img
                id="Image1"
                src={photoUrl1}
                alt="No Profile Photo Available"
                className={`photo-image ${visibleImage === 1 ? 'flip-in' : 'flip-out'}`}
                style={{ borderColor: '#3A2BDF', borderWidth: '1px', borderStyle: 'solid', width: '227px' }}
                key="img1"
              />
              <img
                id="Image2"
                src={photoUrl2}
                alt="No Profile Photo Available"
                className={`photo-image ${visibleImage === 2 ? 'flip-in' : 'flip-out'}`}
                style={{ borderColor: '#3A2BDF', borderWidth: '1px', borderStyle: 'solid', width: '227px', position: 'absolute', top: 0, left: 0 }}
                key="img2"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td align="center" style={{ textAlign: 'center', paddingTop: '3px' }}>
            <div id="UpdatePanel1">
              <input
                type="image"
                src="../images/PageBtn.png"
                alt="1"
                style={{ width: '25px', borderWidth: '0px', cursor: 'pointer' }}
                onClick={() => setVisibleImage(1)}
              />
              <input
                type="image"
                src="../images/PageBtn2.png"
                alt="2"
                style={{ width: '25px', borderWidth: '0px', cursor: 'pointer' }}
                onClick={() => setVisibleImage(2)}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PhotoToggleTable;
