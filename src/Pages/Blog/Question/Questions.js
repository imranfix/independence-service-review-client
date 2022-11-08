import React from 'react';

const Questions = () => {
    return (
        <div className="card w-full bg-base-200 text-black-content grid gy-6 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <div className="card-body">
          <h2 className="card-title text-2xl">1. Difference between SQL and NoSQL?</h2>
          <p className='text-xl'> 1. These databases have fixed or static or predefined schema other They have dynamic schema <br /> <br />
              2.  These databases are not suited for hierarchical data storage otherhand These databases are best suited for hierarchical data storage. <br /> <br />
                3. These databases are best suited for complex queries or These databases are not so good for complex queries. <br /> <br />
                4. Vertically Scalable but Horizontally scalable <br /> <br />
                5. Follows ACID property otherwise Follows CAP(consistency, availability, partition tolerance)</p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">2. What is JWT, and how does it work?</h2>
          <p className='text-xl'>A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). <br />
          <br />  
        A header in a JWT is mostly used to describe the cryptographic operations applied to the JWT like signing/decryption technique used on it. It can also contain the data about the media/content type of the information we are sending.This information is present as a JSON object then this JSON object is encoded to BASE64URL. The cryptographic operations in the header define whether the JWT is signed/unsigned or encrypted and are so then what algorithm techniques to use.
          </p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">3. What is the difference between javascript and NodeJS?</h2>
          <p className='text-xl'>   1. Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. <br /> <br />
        2.	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help           of NodeJS. <br /> <br />
        3.	It is basically used on the client-side.	It is mostly used on the server-side. <br />
        4.	Javascript is capable enough to add HTML and play with the DOM.
            Nodejs does not have capability to add HTML tags. <br /> <br />
        5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
            V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br /> <br />
        6.	Javascript is used in frontend development.	Nodejs is used in server-side development. <br /> <br />
        7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc. 
            Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
            </p>
        </div>

        <div className="card-body">
          <h2 className="card-title text-2xl">4. How does NodeJS handle multiple requests at the same time?
            </h2>
          <p className='text-xl'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
            <br /> <br />
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                <br />  <br />
            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
             </p>
        </div>




      </div>
    );
};

export default Questions;