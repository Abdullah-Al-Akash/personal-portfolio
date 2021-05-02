import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name", text: "Abdullah Al Akash" },
    { id: 2, title: "Email", text: "aabdullahalakash@gmail.com" },
    { id: 3, title: "Phone", text: "+880 1521513233" },
    { id: 4, title: "Linkedin", text: "abdullahalakash" },
    { id: 4, title: "GitHub", text: "abdullahalakash" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus magni fuga voluptatum, sit ullam quasi suscipit expedita repudiandae praesentium exercitationem, quia consequuntur alias id ex dolorum voluptas sed voluptatibus.
              </div>
              <div className="about__info-p2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa assumenda iusto molestiae, architecto exercitationem officia natus quam voluptate autem odit.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
