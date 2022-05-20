import React from 'react'
import expand from '../..'

const Fragmentation = () => {
  return (
    <div className="project" id="2" onClick={() => expand(2)}>
        <div className="p">
            <img className="main-image" src={require("../../assets/ppic/x.png")}
                style={{boxShadow:"none", objectFit:"cover", width:"50px"}}
            />
        </div>
        <div className="a">
            <img className="main-image" src={require("../../assets/forestfragmentation.PNG")}/>
            <h3 style={{textAlign:"center"}}>Forest Fragmentation Assessment</h3>
        </div>
        <div className="p">
            <h3>
                An article together with Habib Ramezani.

                <br></br>
                <a href="https://www.diva-portal.org/smash/get/diva2:1547191/FULLTEXT02.pdf">
                    Click here to read the article
                </a>
            </h3>
        </div>
        <div className="p">
            <p>
                The work consisted of writing several programs in Matlab for the assessments that were needed for the article.
                The program was made for esitmating an aggregation index,  based on sampling data that is gained from user input,
                and to estimate the degree of the clumping of forestation landscape based on this gained index. 
                Fortunately the article is open access, so you can click the link below to read it!
            </p>
        </div>
    </div>
  )
}

export default Fragmentation