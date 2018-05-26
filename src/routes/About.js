import React, {Fragment, PureComponent} from 'react';
import Header from '../components/header.js';
import Section from '../components/Section.js';
import Footer from '../components/footer.js';
import Menu from "../components/menu.component";
import Count from "../routes/count.js";
import './About.css';

class About extends PureComponent {
  render() {
    return (
        <Fragment>
        <div className="container1">
        <div className ="App">
            <Header applicationName="My new application"/>
            <Menu />
            <Section>
                About text
            </Section>

            <Footer authorInformation="Anna Waluszko"/>
        </div>
        </div>
        </Fragment>
    );
  }
}

export default About;
