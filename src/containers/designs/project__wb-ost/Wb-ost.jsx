import React from 'react'
import expand from '../../..'

function WbOst() {
  return (
    <div className="project" id="4" onClick={() => expand(4)}>
        <div className="p">
            <img className="main-image" src={require("../../../assets/ppic/x.png")}
                style={{boxShadow:"none", objectFit:"cover", width:"50px"}}
            />
        </div>
        <div className="a">
            <img className="main-image" src={require("../../../assets/vbpicture.png")}/>
            <h3 style={{textAlign:"center"}}>Västerbottensost</h3>
        </div>
        <div className="p">
            <h3>
                During a four week long project we collaborated with the famous Swedish cheese, Västerbottensost®,
                to redesign their website to match their need better, based on their current branding goals. 
                I was the project manager in my team. 
            </h3>
        </div>
        <div className="p">
            <img className="main-image" src={require("../../../assets/vbreceptgen.PNG")}/>
            <h3 style={{textAlign:"center"}}>An image from the prototype</h3>
        </div>
        <div className="p">
            <p>
                Our goal was to redesign the website based on the brands vision of being known as a premium cheese 
                that people are ready to pay high prices for, while also hoping to inofficially becoming the 
                "national cheese" of Sweden. We created a baseline of three keywords that we felt defined our 
                goal and also the Västerbottensost® brand. Those words were
                <i>heritage</i>, <i>mystique</i> and <i>high quality</i> 
            </p>
        </div>
        <div className="p">
            <img className="main-image" src={require("../../../assets/vbtimeline.PNG")} />
            <h3 style={{textAlign:"center"}}>Another image from the prototype</h3>
        </div>
        <div className="p">
            <p>
                We did a lot of prototyping and user tests to finally land on a concept that we truly believed in. 
                Our early ideas involved 
                some very out of the box concepts, like the whole website being a 360-degree virtual tour of the 
                cheese factory. However, we let the users
                decide which of our concepts they liked best, and their preference based on our keywords was something 
                we called <i>The Story</i>.
            </p>
            <p>
                The story is a timeline of the heritage of Västerbottensost®, that takes the user on a intuitive 
                step-by-step tour through the 
                brands history. To give it all a twist by makin all the pages scroll horizontally instead of 
                vertically, which enhances the feeling of the
                first page being a timeline. 
            </p>
        </div>
    </div>  
  )
}

export default WbOst