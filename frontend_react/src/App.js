import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';

const App = () => {
    return (
        <h1 className="App">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </h1>
    );
    
}

export default App;