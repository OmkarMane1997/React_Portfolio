import React, { useState } from "react";
import resumeFile from "../images/pdf/OmkarMane.pdf";

const Resumedownload = () => {
  const [download, setDownload] = useState(false);

  const downloadHandler = () => {
    // window.location.href = resumeFile
    window.open(
      resumeFile,
      '_blank' // <- This is what makes it open in a new window.
    );
    setDownload(true);
    console.log("first");
  };

  return (
    <div>
      <h1 className="text-center my-5">Resume download</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <h2>
                
                {download
                  ? "Thank You for Resume Download!.."
                  : "Resume Download Request!.."}
              </h2>
            </div>
            <div className="card-body text-center">
              <button
                type="button"
                onClick={downloadHandler}
                className="btn btn-success "
              >
                Click Here to Get Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumedownload;
