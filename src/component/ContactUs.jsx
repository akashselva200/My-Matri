import React from "react";
import Headers from "./Header.jsx";

function ContactUs() {
  // Placeholder for form submission and validation handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form validation and submission logic here
    alert("Form submitted! (Add validation and API integration as needed)");
  };

  return (
    <form
      name="form1"
      method="post"
      action="http://mkmmatrimony.com/contact Us.aspx"
      id="form1"
      onSubmit={handleSubmit}
    >
      

      <table border="0" cellPadding="0" cellSpacing="0" width="100%">
        <tbody>
          <tr>
            <td align="center">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="1000px"
                align="center"
              >
                <tbody>
                  {/* Marquee Header */}
            

                  {/* Logo and Right Header */}
                  
                  <Headers />

                 

                  {/* Page Title */}
                  <tr>
                    <td valign="top">
                      <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="1000px"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        backgroundImage: "url('images/txtbg.png')",
                                        backgroundRepeat: "repeat-x",
                                      }}
                                    >
                                      <table
                                        border="0"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr style={{ height: 10 }}>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="style1"
                                              style={{
                                                fontSize: 23,
                                                color: "#00009D",
                                                fontFamily: "Georgia",
                                                fontWeight: "bold",
                                                padding: 10,
                                              }}
                                            >
                                              <i>Contact Us</i>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top">
                                      <table
                                        border="0"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <table
                                                border="0"
                                                cellPadding="0"
                                                cellSpacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        paddingLeft: 50,
                                                        fontSize: 20,
                                                        fontWeight: "bold",
                                                        color: "#00009D",
                                                      }}
                                                      className="p"
                                                    >
                                                      <span
                                                        style={{
                                                          color: "#3864C3",
                                                          fontSize: 20,
                                                        }}
                                                      >
                                                        Sornam Matrimony
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      className="p"
                                                      style={{
                                                        paddingLeft: 50,
                                                        fontSize: 20,
                                                        fontWeight: "bold",
                                                        color: "#002E5B",
                                                      }}
                                                    >
                                                      No.107A, Anbu Nagar, <br />
                                                      Achariyapuram, <br />
                                                      Villianur, <br />
                                                      Puducherry - 605110
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>&nbsp;</td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        paddingLeft: 50,
                                                        fontSize: 20,
                                                      }}
                                                      className="p"
                                                    >
                                                      <strong>
                                                        <span style={{ color: "#742894" }}>
                                                          Phone :{" "}
                                                        </span>
                                                        8056484897{" "}
                                                        <span style={{ color: "#742894" }}>
                                                          Whatsapp :
                                                        </span>{" "}
                                                        8056484897{" "}
                                                      </strong>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>&nbsp;</td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        paddingLeft: 50,
                                                        fontSize: 20,
                                                      }}
                                                      className="p"
                                                    >
                                                      <strong>
                                                        <span style={{ color: "#742894" }}>
                                                          Email :{" "}
                                                        </span>
                                                        <a
                                                          href="mailto:malarmaalaimatrimony@gmail.com"
                                                          className="link"
                                                          style={{ fontSize: 20 }}
                                                        >
                                                          sornammatrimony@gmail.com
                                                        </a>
                                                      </strong>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>&nbsp;</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top">{/* Empty column */}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        backgroundImage: "url(images/txtbg_Rev.png)",
                                        backgroundRepeat: "repeat-x",
                                        height: 39,
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: 23,
                                          color: "#00009D",
                                          fontFamily: "Georgia",
                                          fontWeight: "bold",
                                          padding: 10,
                                        }}
                                      >
                                        &nbsp;
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{ height: 5 }}>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                border="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td align="center">
                                      <img src="images/சுபம்.png" alt="" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default ContactUs;
