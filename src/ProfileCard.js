function ProfileCard({title,handle,image}){
return(
    <div>
         <img src = {image}   alt = "pda logo"></img>
        <div>Title name is {title}</div>
        <div> Handle name is {handle}</div>
    </div>
)
}
 export default ProfileCard
    