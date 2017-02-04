//general imports
import React from "react";

class Resume extends React.Component {
    render() {
        return(
            <div id = "contentContainer">
                <h2> Resume </h2>
                <Experience />
                <Other />
                <HonorsAwards />
            </div>
        );
    }
}
class Experience extends React.Component{
    render() {
        return(
            <div>
                <h3>Experience</h3>
                <p>Experience Coming Soon</p>
            </div>
        );
    }
}
class Other extends React.Component{
    render() {
        return(
            <div>
            <h3>Other Experience</h3>
            <p>Other Experience Coming Soon</p>
            </div>
        );
    }
}
class HonorsAwards extends React.Component{
    render() {
        return(
            <div>
                <h3>Honors and Awards</h3>
                <p> Honors and Awards Coming Soon</p>
            </div>
        );
    }
}
export default Resume;