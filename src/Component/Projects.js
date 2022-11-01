import React from "react";
const ProjectInfo = [
  {
    projectName: "React Weather Application",
    projectDescription:
      "React Weather Application- using React and openweathermap API",
    linkVisit: "https://github.com/OmkarMane1997/Weather-App",
    image: "",
  },
  {
    projectName: "Pet Website",
    projectDescription:
      "Pet Website - Convert from PSD to WEB by using HTML5,css3,Bootstrap",
    linkVisit: "https://omkarmane1997.github.io/petWeb/",
    image: "",
  },
  {
    projectName: "Task Manager",
    projectDescription:
      "Task Manager  - using HTML5,css3,Bootstrap , expressJs ,mongodb ",
    linkVisit: "https://taskz3.herokuapp.com",
    image: "",
  },
  
];

const Projects = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5"> Projects</h1>
      <div className="row">

        {
            ProjectInfo.map((item,index)=>{
            const { projectName,projectDescription,linkVisit}= item;
                
                return(
                    
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-2" key={index}>
                        <div className="card w-100 h-100">
                            {/* <img src={image} alt={image} className="img-fluid card-img-top"/> */}
                            <div className="card-header text-center">
                                <div className="card-title my-2"><b>{projectName}</b></div>
                            </div>
                            <div className="card-body mx-1">
                                <p className="card-text lead">
                                    {projectDescription}
                                </p>
                                
                            </div>
                            <div className="text-center footer my-3">
                                    <a href={linkVisit} target="_blank" rel="noopener noreferrer" className="btn btn-success">Visit</a>
                                </div>
                        </div>
                     </div>
                )
            })
        }
       
      </div>
    </div>
  );
};

export default Projects;
