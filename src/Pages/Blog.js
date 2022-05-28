import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div>
                <h2 className='text-primary'>How will you improve the performance of a React Application?</h2>
                <p> you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            </div>
            <div>
                <h2 className='text-primary'> What are the different ways to manage a state in a React application?</h2>
                <p>Local State</p>
                <p>Global State</p>
                <p>Server State</p>
                <p>URL State</p>
            </div>
            <div>
                <h2 className='text-primary'>
                    How does prototypical inheritance work?
                </h2 >
                <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes</p>
            </div>
            <div>
                <h2 className='text-primary'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>We know, array has an index number. I can easily find out in array name,price,description etc etc by array index</p>
            </div>
            <div>
                <h2 className='text-primary'>Why should we write unit tests?</h2>
                <p>One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency.</p>
                
            </div>
        </div>
    );
};

export default Blog;