import React,{useState} from "react";
function Timer(){


    const[sec,setSec] = useState(0);
    
    const[min,setMin] = useState(0);
    
    const[hour,setHour] = useState(0);

    function startTimer(){
            setSec(sec+1);
            if(sec === 60){
                setSec(1);
                setMin(min+1);
            }
            if(min === 60){
                setMin(1);
                setHour(hour+1);
            }       
    };

    setTimeout(startTimer,1000);

    return(
        <div>
            <h2>{sec} : {min} : {hour}</h2>
            <button onClick= {()=> startTimer}>Start!</button>
        </div>
    );
}

export default Timer;