import React, {Fragment, PureComponent} from 'react';
import Header from '../components/header.js';
import Section from '../components/Section.js'; 
import Footer from '../components/footer.js';
import Menu from "../components/menu.component";
import './Contact.css'

class Contact extends PureComponent {
  render() {
    return (
        <Fragment>
            <div className ="App">
                <Header applicationName="My new application"/>
                <Menu />
                <Section>
                    Contact text
                </Section>
                <Footer authorInformation="Anna Waluszko"/>
            </div>
        </Fragment>
    );
  }
}

export default Contact;
