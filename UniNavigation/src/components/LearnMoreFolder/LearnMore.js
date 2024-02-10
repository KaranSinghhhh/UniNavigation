import React from 'react';
import './LearnMore.css'; // Make sure this path is correct

function LearnMore() {
    return (
        <div className="learn-more-container">
            <h1 className="learn-more-title">Learn More About Baruch Navigation</h1>
            <div className="learn-more-content">
                <h1>Why did I create Baruch Navigation?</h1>
                <p>This website was primarily created to help freshman and transfer students navigating around Baruch.</p>

                <h1>How did I get this idea?</h1>
                <p>The Baruch subreddit and discord is a digital space where questions are frequently asked. I decided to build around the most frequently asked questions and I developed an idea that grew into this website. </p>

                <h1>Coming Soon...</h1>
                <p>An AI chatbot that can answer your questions and will soon be replaing the Help page. </p>
                
                {/* You can replace the above paragraph with your actual content */}
            </div>
        </div>
    );
}

export default LearnMore;
