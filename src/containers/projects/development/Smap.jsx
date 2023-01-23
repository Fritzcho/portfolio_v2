import React from 'react'
import { Subheader } from '../../../components'

function Smap() {
  return (
    <div className='portfolio__project'>
        <Subheader/>
        <div className='portfolio__heading'>
            <h1 data-text="Kuben">SMap</h1>
            <h2>Explore<span style={{color: "#87CEEB"} }> toplists </span>in a<span style={{color:"#059033"}}> fun </span>way.</h2>
        </div>
        <img className='portfolio__project-img' src={require("../../../assets/smap/smap.png")}/>
        <div className='portfolio__project-ingress'>
            <p>
                A group project during the Application development for Internet course where we decided to create an interactive map which could display
                different Spotify toplists simply by clicking on a country. 
                <br/><br/>
                Unforunately, we have not yet adapted the application to Spotifys terms for having it published,
                therefore you'll have to add your own API keys to run the application. 
            </p>
            <a className='project__button' href='https://github.com/Fritzcho/SpotifyMap/'>SEE GIT REPO</a>
        </div>

        <div className='portfolio__project-content'>
            <h1>Process</h1>
            <p>
                During the final phase of the course we had free hands to come up with our ideas for an application and build it in any way we pleased.
                The only requirements were that it had to be a web-application implementing atleast two different APIs. We explored different APIs that we
                thought could be interesting to use and finally landed in Spotify's since they have a lot of interesting information and functionality in their API. 
                We then found MapBox an interesting API to combine Spotify with to create a fun and interactive music map. Later we also combined the APIs with Last.FM
                for countries where Spotify toplists could not be found, one of the issues at hand that have to be solved before we can get approval for publicating the 
                application.
            </p>
            <img src={require("../../../assets/smap/smap3.png")}/>
            <p>
                In the application users can click on any country to display a pop-up displaying a list of countries current top songs. The user can then choose any item
                in the list to display more information about, such as popularity and release-date. In this view, users can also choose to play the song by clicking the play
                button. Provided that the Spotify application is open in the background, the song will then start playing. 
            </p>
        </div>
    </div>
  )
}

export default Smap