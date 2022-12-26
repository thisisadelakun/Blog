import React from 'react'
import '../Styles/Main.css'
import OilPlant from '../Assets/oilplant.png'
import Card from 'react-bootstrap/Card';
import RelatedPost from './RelatedPost';
// import About from './About';git
// import Footer from './Footer';
// import Render from './Render';

const Main = () => {
  return (
    <div className='my-main' id='my-main'>
      <div className='mainfirsttext'>
        <div>
          <h1 className='women'>Women</h1>
          <h1 className='women'>In Oil World</h1>
          <h2 className='research'>Global Oil and Gas Research</h2>
        </div>
        <div className='services'>
          <button className='servicesbtn' type="submit"><a href="#latestnews">Latest News</a></button>
          <button className='servicesbtn' type="submit"><a href="#advertise">Advertise</a></button>
        </div>
      </div>
      <div className='mainsecondtext'>
        <div className='myfirstcard'>
          <Card border="light" style={{ width: '17rem', height: '12rem' }}>
            <Card.Header className='toparticle' style={{ color: 'grey' }}>TOP ARTICLES</Card.Header>
            <Card.Body className='mycards'>
              <Card.Title className='mycardtitle'>
                <a className='mycardsref1' href="/Yvonnedb">- Life of an Offshore Medic <br /><small className='byyvonne'>  by Kathy Price</small></a>
              </Card.Title>
              <Card.Title className='mycardtitle'>
                <a className='mycardsref' href="/DidYouKnow">- Did you Know?<br /><small className='byyvonne'>  by Mattew Joe</small></a>
              </Card.Title>
              <Card.Title className='mycardtitle'>
                <a className='mycardsref' href="#top">- Gas around the World <br /><small className='byyvonne'>  by Daryln White</small></a>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className='oilplant'>
          <img className='img-fluid' src={OilPlant} width={700} alt="" style={{ borderRadius: '5px' }} />
          <p className='oilplant-text'>
            + Oil and Gas Industry are major industries in the world market and play the most influential role in the world economy as the main fuel sources of the Globe. <br /> <br />
            + The processes and systems involved in producing and distributing oil and gas are highly complex, capital-intensive, and require state-of-the-art technology. Historically, natural gas has been linked to oil, mainly because of the production process or upstream side of the business. <br /> <br />
            + For much of the history of the industry, natural gas was viewed as a nuisance and even today is flared in large quantities in some parts of the world, including China, Canada and the  United States. Natural gas has taken on a more prominent role in the Global's energy supply as a consequence of shale gas development in the United States, as mentioned above, and its lower greenhouse gas emissions when combusted when compared to oil and coal.
          </p>

          <div className='magaz'>
            <div className="magaz1">
              <div className='myfirstcard'>
                <Card border="light" style={{ width: '17rem', height: '14rem' }}>
                  <Card.Header className='toparticle' style={{ color: 'grey' }}>News Letter</Card.Header>
                  <Card.Body className='mycards'>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref1' href="/">- Merry Christmas<br /><small className='byyvonne'>  As we go into the holidays...</small></a>
                    </Card.Title>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref' href="/">- Shoud you be worry?<br /><small className='byyvonne'>  Oil Scarcity looming around...</small></a>
                    </Card.Title>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref' href="/">- Chevron, Shell and others <br /><small className='byyvonne'> The big guns in industy moving towards...</small></a>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>

            </div>
            <div className="magaz2">
              <div className='myfirstcard'>
                <Card border="light" style={{ width: '17rem', height: '12rem' }}>
                  <Card.Header className='toparticle' style={{ color: 'grey' }}>Magazine</Card.Header>
                  <Card.Body className='mycards'>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref1' href="/Yvonnedb">- Life of an Offshore Medic <br /><small className='byyvonne'>  by Kathy Price</small></a>
                    </Card.Title>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref' href="/">- Surving Oil Spillage<br /><small className='byyvonne'>  by Julian Marshall</small></a>
                    </Card.Title>
                    <Card.Title className='mycardtitle'>
                      <a className='mycardsref' href="/">- How we got it Right <br /><small className='byyvonne'>  by Brenda Woods</small></a>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div className="latestnews" id='latestnews'>
            <h5 className="latestnewsh5" >
              Latest News
            </h5>
            <div className="latestp">
              <a href="/" className="latesta">U.S. Shale Growth Overshadowed by Obstacles</a> <br />
              <small className='latestsmall'>The oil and gas industry has long been a powerful force in earning profits while...</small>
            </div>
            <div className="latestp">
              <a href="/" className="latesta">Power the Nation with Predictive Technology</a> <br />
              <small className='latestsmall'>With pressure increasing on the oil and gas industry to minimize costs while producing more and more energy, and large...</small>
            </div>
            <div className="latestp">
              <a href="/" className="latesta">Chevron Hits Motherlode in the Mediterranean</a> <br />
              <small className='latestsmall'>Oil and gas giant, Chevron Hits Motherlode in the Mediterranean...</small>
            </div>
          </div>
        </div>
        <div className='relatedpost'>
          <RelatedPost />
        </div>
        <div className='advertise' id='advertise'>
          <h5 className="advertiseh5">
            TARGETED ADVERTISING
          </h5>
          <p className="advertisequote">
            “Every time a message seems to grab us, and we think, 'I just might try it,' we are at the nexus of choice and persuasion that is advertising.” <br /> - Andrew Hacker
          </p>
          <p className="advertisep">
            Relevance, Expertise and Visibility.
            By distributing the right mix of advertising and content you will get the best of all three.
          </p>
          <a href="/Contact" className="advertisea">Advertise with us now</a>

        </div>
      </div>


    </div>
  )
}

export default Main