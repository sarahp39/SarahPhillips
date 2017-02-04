//general imports
import React from "react";


class Projects extends React.Component {
    render() {
        return(
            <div id = "contentContainer">
                <h2>My Projects</h2>
                <div className = "col-md-2">
                    <h3>Design</h3>
                    <Designs />
                </div>
                <div className = "col-md-2">
                    <h3>Papers</h3>
                    <Papers />
                </div>
            </div>
        );
    }
}
class Designs extends React.Component {
    render() {
        return(
            <div>
            <p> Designs coming soon </p>
            </div>
        );
    }
}
class Papers extends React.Component {
    render() {
        return(
            <div>
            <p> Papers coming soon </p>
            </div>
        );
    }
}
export default Projects;