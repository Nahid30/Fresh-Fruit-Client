import React from 'react';
import { Tab, Table, Tabs } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center my-4 text-secondary'>Answer Of Questions</h2>

            
                <div className='container'>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className=" mb-3">
                        <Tab eventKey="home" title="Question 1">
                            <h4 className='my-4 text-danger'>What is the difference between javascript and node.js ?</h4>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>javascript</th>
                                        <th>node.js</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                        <td>NodeJS is a Javascript runtime environment.</td>
                                        

                                        
                                    </tr>
                                    <tr>
                                        <td>Javascript can only be run in the browsers.</td>
                                        <td>It is mostly used on the server-side.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                        <td>Nodejs does not have capability to add HTML tags.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                        <td>Nodejs does not have capability to add HTML tags.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                        <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Javascript is used in frontend development.	</td>
                                        <td>Nodejs is used in server-side development.</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="profile" title="Question 2">
                            <h4 className='my-4 text-danger'>When should you use node.js and when should you use mongodb ?</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th >When should you use node.js?</th>
                                        <th >When should you use mongodb?</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>It runs Javascript, so you can use the same language on server and client, and even share some code between them (e.g. for form validation, or to render views at either end.)</td>
                                        <td>You absolutely must store unstructured data. Say things coming from 3rd-party API you don’t control, logs whose format may change any minute, user-entered metadata, but you want indexes on a subset of it.</td>
                                    
                                    </tr>
                                    <tr>
                                        <td>The single-threaded event-driven system is fast even when handling lots of requests at once, and also simple, compared to traditional multi-threaded Java or ROR frameworks.</td>
                                        <td>You need to handle more reads/writes than single server can deal with and master-slave architecture won’t work for you.</td>
                                    </tr>
                                    <tr>
                                        <td>The ever-growing pool of packages accessible through NPM, including client and server-side libraries/modules, as well as command-line tools for web development.</td>
                                        <td>You change your schema very often on a large dataset.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>It has become the defacto standard environment in which to run Javascript-related tools and other web-related tools, including task runners, minifiers, beautifiers, linters, preprocessors, bundlers and analytics processors.</td>
                                        <td>High Write Load- If the need is to load rows of data without much security issues, you can be using it. However do avoid using with transactions, unless there is security implemented.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>It seems quite suitable for prototyping, agile development and rapid product iteration.</td>
                                        <td>High Availability in Cloud- It is easier to set up a series of master-slave servers and recovery from failure is faster too.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Node Package Manager.</td>
                                        <td>Scalability- RDBMS has it’s own limitations when it comes to scalability, especially the performance which often tends to degrade. MongoDB comes with a built in solution for partition and database sharding.</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </Tab>
                        
                        <Tab eventKey="contact" title="Question 3" >
                            <h4 className='text-danger my-4'>What is the Differences between SQL and NoSQL databases ?</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                        <td>Non-relational or distributed database system.</td>
                                        

                                        
                                    </tr>
                                    <tr>
                                        <td>These databases have fixed or static or predefined schema</td>
                                        <td>They have dynamic schema</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>These databases are not suited for hierarchical data storage.	</td>
                                        <td>These databases are best suited for hierarchical data storage.</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>These databases are best suited for complex queries	</td>
                                        <td>These databases are not so good for complex queries</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Vertically Scalable	</td>
                                        <td>Horizontally scalable</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Follows ACID property</td>
                                        <td>Follows CAP(consistency, availability, partition tolerance)</td>
                                        
                                    </tr>
                                    
                                </tbody>
                            </Table>

                        </Tab>
                    </Tabs>
                </div>
            </div>

    );
};

export default Blogs;