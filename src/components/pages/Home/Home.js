import React from 'react';
import './Home.scss';

class Home extends React.Component {
  state = {
    // favicon: [],
  };

  componentDidMount() {
  }

  render() {
    return (
     <div className="Home">
     <div className="heroarea">
<p className="servies">Have you ever thought of the parrallels of business and fitness?</p>
 <p className="services">The formula is exactly the same</p>
 <p className="services">Start with a mindset = you need a burning desire to succeed, the want has to be bigger than the excuses.</p>
 <p className="services">Find the right Mentor</p>
 <p className="services">Have a game plan with achievable goals</p>
 <p className="services">Put it in writing</p>
 <p className="services">Schedule your workout</p>
 <p className="services">Take Action</p>
 <p className="services">Expect Failures along the way.  That is how we learn.</p>
 <p className="services">Click contact to schedule a free consultation</p>

   </div>
   </div>
    );
  }
}

export default Home;
