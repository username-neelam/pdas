import ProfileCard from "./ProfileCard";

function App(){
    return(
        <div>
           <h1>Personal digital Assitants</h1> 
            <ProfileCard title = "Alexa" handle = "alexa99" image = "AlexaImage"></ProfileCard>
           <ProfileCard  title = "Cortana" handle = "cortana32" image = "CortanaImage"></ProfileCard>
           <ProfileCard  title = "Siri" handle = "siri01"  image = "siriImage"></ProfileCard>
     </div>
        
    )
} 
export default App