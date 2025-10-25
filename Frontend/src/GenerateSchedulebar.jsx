import Deadlinedummy from "../../Backend/deadlines";
import Schedulebar from "./Schedulebar";
import {format} from "date-fns";

function GenerateSchedulebar()
{
    const Isdeadlinenull=(deadline)=>{
        return deadline.deadline===null;
    }

    const formatdate=(deadline)=>{
        return format(new Date(deadline), "MMM dd yyyy, hh:mm a")
    }

    return(
       
                Deadlinedummy.map((deadline)=>{
                    if(deadline.confidence==="high")
                    {
                        return <Schedulebar task={deadline.task} deadline={Isdeadlinenull(deadline) ? "No Deadline" : formatdate(deadline.deadline)} key={deadline.id}/>
                    }
                })
            
    )
         
       
}

export default GenerateSchedulebar;