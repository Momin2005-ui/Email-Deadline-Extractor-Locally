import ScheduleButton from "./ScheduleButton";

function Schedulebar({task,deadline}) {
   
   
    return(
        
        <div className="schedulebar" >
            <div style={{paddingLeft:"100px"}}>
                {task}
            </div>
            <div style={{position:"absolute", left:"600px"}}>
                {deadline}
            </div>
            <div style={{position:"absolute", right:"150px"}}>
                {<ScheduleButton/>}
            </div>  
        </div>
    
    )
}

export default Schedulebar;