import React , {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Contact = () => {

  const [info,setInfo] = useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  });

  const navigate =useNavigate();
  const readValue =(e)=>{
    // console.log('event=',e.target);
    const {name, value} = e.target;
    setInfo({...info ,[name]:value})
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Contact info=", info);
    navigate('/contact');


  }
  return (
    <div className="container">
      <h1 className="text-center my-5"> Get In Touch With Me</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="my-3 px-3">
                  <label className="form-label" htmlFor="name">
                     <b>Name</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="mb-3 px-3">
                  <label className="form-label" htmlFor="email">
                     <b>Email</b>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Enter Email"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="mb-3 px-3">
                  <label className="form-label" htmlFor="mobile">
                    <b> Mobile no</b>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="mobile"
                    name="mobile"
                    placeholder=" Enter Mobile"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="mb-3 px-3">
                  <label className="form-label" htmlFor="message">
                    <b>Message</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter Message"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="mb-3 px-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
