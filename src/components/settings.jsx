function Settings({formstate, setformstate}){
    const SubmitDetails = () =>{
        if(formstate){
            console.log("Form state Values", formstate)
            setformstate("")
        }
        
    }
    return(
        <button onClick={()=>SubmitDetails()}>Submit</button>
    )
 
}

export default Settings;