import React from "react";

function Footer() {
  return (
    <div className="bg-dark text-light p-3">
      <h6>+91 7320810579</h6>
      <h6>rahulkrnodejs@gmail.com</h6>
      <h6 className="m-1 footer_reserved">
        <i className="far fa-copyright"></i> Copyrights 2024. Nova All Rights
        Reserved.
      </h6>
      <style>
        {`
          @media (max-width: 450px) {
            .footer_reserved {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
