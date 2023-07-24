import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
      <header>
        { }
      </header>
      <main>
        <div className="container">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Organization Details
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>Organization Name: ABC Restaurant</p>
                  <p>Address: 123 Main Street</p>
                  <p>Location: City, State</p>
                  <p>Contact Details: 123-456-7890</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default AboutUs;