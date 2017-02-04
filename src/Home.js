//general imports
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div id = "contentContainer">
                <h2>Welcome to My Site!</h2>
                <h3>About Me</h3>
                <div className = "col-md-3">
                    <img aria-label = "A photo of Sarah" src="../img/sarah2.jpg" className = "img-circle" alt = "Sarah Phillips"/>
                    <br />
                    <h4 aria-label = "About Sarah as a Student"> Me as a Student </h4>
                    <p> I'm currently an Informatics Junior at the University of Washington. 
                    I have a strong interest in UX design and Project Management. 
                    My goal is to work as a UX designer and Project Manger so I may, one day, 
                    manage UX design team of my own. </p>
                    <br />
                </div>
                <div className = "col-md-3">
                    <img aria-label = "A photo of Sarah and her Family" src="../img/picFamily.jpg" className = "img-circle" alt = "Sarah Phillips"/>
                    <br />
                    <h4 aria-label = "About Sarah as a Person"> Me as a Person </h4>
                    <p> One of the most important things to me is family. 
                    When I am not with my family, I enjoy traveling, eating, 
                    and hanging out with friends or my boyfriend and his daughter. 
                    I'm super into movies and games (boards, cards, video). </p>
                    <br />
                </div>
                <div className = "col-md-3">
                    <img aria-label = "A photo of Sarah and her Coworkers" src="../img/picToyota.jpg" className = "img-circle" alt = "Sarah Phillips"/>
                    <br />
                    <h4 aria-label = "About Sarah as a Worker"> Me as a Worker </h4>
                    <p> I am connected with everyone I work with. 
                    I value hard work and dedication because those are
                    important values I bring to the table. 
                    However, I am a firm believer that work should be fun too. 
                    Work Hard Play Hard! </p>
                    <br />
                </div>
            </div>
        );
    }
}
export default Home;