import './Defination.css'
import Socail from '../Social/Socail'
import IDImg from '../../../assets/avatar-jessica.jpeg'
 function Defination(){
    const arrayOfObject=[
        {
            socailItem:'GitHub',
            UiniqeID:1
        },
        {
            socailItem:'Frontend Mentor',
            UiniqeID:2
        },
        {
            socailItem:'LinkedIn',
            UiniqeID:3
        },
        {
            socailItem:'Twitter',
            UiniqeID:4
        },
        {
            socailItem:'Instagram',
            UiniqeID:5
        }
    ]
    return(
        <div id="main">
        <img src={IDImg}></img>
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom </h2>
        <p>"Front-end developer and avid reader."</p>
       {
        arrayOfObject.length >0?( 
            arrayOfObject.map((item)=>
            <Socail 
            key={item.UiniqeID}
            socailItem={item.socailItem}></Socail>
            )
        )
        :
        (<h1>the array is empty</h1>)
       }
        </div>
    )
 }
  export default Defination