import React from "react";

const experienceInfo = [
  {
    companyName: "Comtranse Technology Kolhpaur",
    position: "Web Developer",
    period: "May-2021 To June-2022",
    description: "Work as web developer, in Comtranse Technology",
    usedTechnologies:"HTML, CSS3, Js , Bootstrap, Jquery, PHP-Codeigniter",
    projects: [
      {
        projectName: "Dadhichi Agro",
        projectDescription:"Small E-commerce to Manage the orders / quotation related Products by Admin/Owner. User add the Product in Cart and place Order / Quotation.[Its used for super distributors (admin) to wholesale distributor (user) ]"
      },
      {
        projectName: "Star Education",
        projectDescription:
          "This is an admin panel of start eduction app , In this Admin can manage the topic , syllabus, home work, learning videos,PDF Books ,MCQ etc. To display in android application at user End.Create user , Manage them as per requirement of teachers",
      },
      {
        projectName:"Clientele Hospital" ,
        projectDescription:
          "Hospital management system.Manage the following thinks like Front Office Management,New Patient Registration,New Employee Registration, Appointment Management,invoice generator etc.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5"> Experience</h1>
      <div className="row">
        {experienceInfo.map((item, index) => {
          const { companyName, position, period, description, projects} = item;
          return (
            <div className="col-md-6 offset-md-3 my-2" key={index}>
              <div className="card">
                <div className="card-header ">
                  <div className="text-center my-2">
                    <b className="text-uppercase text-decoration-underline">
                      {companyName}
                    </b>
                  </div>

                  <div className="d-flex justify-content-between">
                    <b>Position:-{position}</b>
                    <b className="badge bg-success ">{period}</b>
                  </div>
                </div>
                <div className="card-body">
                  <p className="lead text-center">{description}</p>
                  <div>
                    { projects.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h3>{item.projectName}</h3>
                                
                               <p> {item.projectDescription}</p>
                            </div>
                        )
                    })

                    }
                  </div>
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
