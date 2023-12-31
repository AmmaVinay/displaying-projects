import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Tabs, Tab} from 'react-bootstrap';
const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
     {
       projectId: 3,
       category: 'STATIC',
       imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
       title: 'Happy Meals',
       description: 'Discover the best foods in over 1,000 restaurants.',
     },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
 {
   projectId: 7,
   category: 'RESPONSIVE',
   imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
   title: 'Design',
   description:
     'A website to showcase the best features and give more information about the Design tool.',
 },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

function MyTabs() {
  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>Projects</h1>
       <p className="text-center">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

      <div className='w-50 mx-auto'>
        <Tabs
          defaultActiveKey={tabsList[0].tabId}
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
        >
          {tabsList.map(({ tabId, displayText }) => (
            <Tab key={tabId} eventKey={tabId} title={displayText} className=''>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {projectsList
                  .filter((eachItem) => eachItem.category === tabId)
                  .map((item) => (
                    <Card key={item.projectId} style={{ width: '18rem' }} className='mb-3'>
                      <Card.Img variant="top" src={item.imageURL} alt={item.title} />
                      <Card.Body className='shadow-lg bg-white border-secondary rounded'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
    }
export default MyTabs;

 