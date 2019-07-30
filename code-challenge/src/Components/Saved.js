import React from 'react'
import OpenInNewIcon from '@material-ui/icons/OpenInNewRounded';


  const Saved = (props) => {
    return (
      <main className="save">
        <a className="save" target="_blank" rel="noopener noreferrer" href={props.save.pageURL}>#{props.save.id}</a>
        <OpenInNewIcon className="save" style={{ color: "#75BCB", marginBottom: "auto", margin: 5,  fontSize: 15 }} />
      </main>
    )
  }

export default Saved;
