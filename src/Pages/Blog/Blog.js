import React from 'react';

const Blog = () => {
    return (
        <div className='p-4 m-4'>
            <div className='bg-slate-400 p-4 rounded-xl mb-4'>
                <h1 className='text-xl font-bold'>Differences between JavaScript and NodeJS</h1>
                <ol>
                    <li>1. JavaScript is programming language. Whereas NodeJS is a run-time environment for JavaScript that can run on server.</li>
                    <li>2. JavaScript is used for client side development. NodeJS is used for server side development.</li>
                    <li>3. JavaScript can manipulate browser DOM while NodeJS doesn't have this functionality.</li>
                    <li>4. JavaScript follows JavaScript standards while writing programs, NodeJS is written in C++ programming language and enables JavaScript to run outside of browser.</li>
                </ol>
            </div>

            <div className='bg-slate-400 p-4 rounded-xl mb-4'>
                <h1 className='text-xl font-bold'>When should you use nodejs and when should you use mongodb</h1>
                <p>
                    NodeJS is used for server-side website development. Its non-blocking, event-driven nature enables cross-platform applications to run smoothly on any website. <br/> MongoDB is a NoSQL database that does not follow relational database schema. This enables MongoDB to store massive amount of data in JSON or XML form. Each data in the mongodb is associated with a key value pair containing specific unique ID.
                </p>
            </div>

            <div className='bg-slate-400 p-4 rounded-xl mb-4'>
                <h1 className='text-xl font-bold'>Differences between sql and nosql databases.</h1>
                <ol>
                    <li>1. SQL is vertically scalable while NoSQL is horizontal.</li>
                    <li>2. SQL databases are relational but NoSQL databases are non relational.</li>
                    <li>3. SQL databases are table based while NoSQL databases are document based and data are stored as JSON or XML file format.</li>
                    <li>4. NoSQL is best for unstructured data. SQL is better for structured data.</li>
                    <li>5. SQL uses predefined schemas hence very restrictive in nature while Nosql uses dynamic schemas enabling storing various sorts of data easily.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blog;