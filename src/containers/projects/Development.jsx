import React from 'react'
import './projects.css'
import Object from './Object'

const Developments = () => {
    var s = "Evt.png"
    return (
      <div className='portfolio__dev'>
          <Object path={"kuben/logo.jpg"} title={"Kuben Umeå"} link="/portfolio_v2/kuben"/>
          <Object path={"smap/smap3.jpeg"} title={"SMap"} link="/portfolio_v2/smap"/>
          <Object path={"UMUbook/umubook.png"} title={"UMUBook"} link="/portfolio_v2/umubook"/>
          <Object path={"android.png"} title={"OSPReminder - Coming soon"}/>
          <Object path={"Evt.png"} title={"Evt - Coming soon"}/>
      </div>
    )
}

export default Developments