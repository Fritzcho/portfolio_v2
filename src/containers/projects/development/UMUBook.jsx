import React from 'react'
import { Subheader } from '../../../components'

function UMUBook() {
  return (
    <div className='portfolio__project'>
        <Subheader/>
        <div className='portfolio__heading'>
            <h1 data-text="Kuben">UMUBook</h1>
            <h2>An<span style={{color: "#87CEEB"} }> experimental </span>social<span style={{color:"#059033"}}> media </span> platform.</h2>
        </div>
        <div className='portfolio__project-ingress'>
            <p>
                A fun twitter-clone created in ASP.NET as an assignment during a database course. The application has full
                functionalities for followers, likes, replies, posts and much more thanks to quite a complicated database
                that we created.
            </p>
            <a className='project__button' href='https://github.com/Fritzcho/UMUBook'>SEE GIT REPO</a>
        </div>
        <div className='portfolio__project-content'>
                <img src={require("../../../assets/UMUbook/profile.png")}/>
        </div>
    </div>
  )
}

export default UMUBook