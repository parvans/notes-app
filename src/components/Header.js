import React from 'react'

function Header({handleToggleMode}) {
  return (
    <div className="header">
            {/* heading of notes app  */}
            <h1><span style={{color:"#10CAF7"}}>Pretty </span>Notes</h1>
      {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
        <button onClick={()=>handleToggleMode((previous)=>!previous)} className="save">Toggle Mode</button>

    </div>
  )
}

export default Header
