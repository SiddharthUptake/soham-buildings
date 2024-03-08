import React, { useEffect, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import PhaseOne from './Phases/PhaseOne';
import PhaseTwo from './Phases/PhaseTwo';
import PhaseThree from './Phases/PhaseThree';


const Example = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const containerClass = isWideScreen ? 'container-fluid px-5' : 'container-fluid';

  return (
    <div className={`${containerClass} mt-5 mb-5`}>
      <Nav tabs className='tab-view'>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : 'text-primary'}
            onClick={() => toggle('1')}
          >
            Phase 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : 'text-primary'}
            onClick={() => toggle('2')}
          >
         Phase 2 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '3' ? 'active' : 'text-primary'}
            onClick={() => toggle('3')}
          >
         Phase 3 
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <PhaseOne/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <PhaseTwo/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col>
              <PhaseThree/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Example;
