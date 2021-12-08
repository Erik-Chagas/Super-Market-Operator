import React from "react";
import Lottie from 'react-lottie';
import * as Loading from '../../assets/animations/loading/loading.json'
import * as Done from '../../assets/animations/loading/done.json'

function App({loading}){
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: Loading.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const defaultOptions2 = {
        loop: false,
        autoplay: true,
        animationData: Done.default,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
            { !loading ? <Lottie isClickToPauseDisabled={true} options={defaultOptions2} height={200} width={200} />
            :
            <Lottie isClickToPauseDisabled={true} options={defaultOptions1} height={200} width={200} /> 
            }
        </>
    )
}

export default App