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
       <div className="home container-fluid">
       <div className="heroarea">
          <h1 className="typewriter">Let us <span>&#163;</span>abricate <span>&#163;</span>or you</h1>
          <article>
      <p className="intro">No Matter Your Industry.  No Matter Your Design.  We have a solution for You. Click below for a sampling of our custom fabrication.</p>
      </article>
   </div>
   </div>
</div>
    );
  }
}

export default Home;
