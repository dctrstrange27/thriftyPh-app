import React from 'react'
import './Loading.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const mystyle = {
    color: "white",
    marginTop: 450,
  };


const Loading = () => {
	return (
		<div className="Loading" align='center'>
            <Loader 
                style={mystyle}
                type="ThreeDots"
                color="#00BFFF" 
                height={100}
                width={100}
                timeout={700}
            />
		</div>
	)
}

export default Loading