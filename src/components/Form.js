import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import '../style/style.css'
import {useState} from 'react'
const Form = () =>{
    const [fName,setFName] = useState('')
    const [lName,setLName] = useState('')
    const [city,setCity] = useState('')
    const [email,setEmail] = useState('')
    const [country,setCountry] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [profession,setProfession] = useState('')
    const [socialMedia,setSocialMedia] = useState('')

    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name === "fName"){
            setFName(value)
        }
        else if(name === "lName"){
            setLName(value)
        }
        else if(name === "city"){
            setCity(value)
        }
        else if(name === "email"){
            setEmail(value)
        }
        else if(name === "country"){
            setCountry(value)
        }
        else if(name === "phoneNo"){
            setPhoneNo(value)
        }
        else if(name === "profession"){
            setProfession(value)
        }
        else if(name === "socialMedia"){
            setSocialMedia(value)
        }
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = {
            fName,
            lName,
            city,
            email,
            country,
            phoneNo,
            profession,
            socialMedia
        }
        const response = await axios.post('http://localhost:3949/api/user/register',formData)
        if(response.data){
            swal("successfully submitted")
            setFName('')
            setLName('')
            setCity('')
            setEmail('')
            setCountry('')
            setPhoneNo('')
            setProfession('')
            setSocialMedia('')
        }
    }
    return(
        <div className="hero-section">
            <div className="container">
                <div className="apply_box">
                    <h1>Diplomats Sign Up</h1>
                <form onSubmit={handleSubmit}>
                        <input type='text' value={fName} name="fName" placeholder="First Name" className="fName" onChange={handleChange} required />
                        <input type='text' value={lName} name="lName" placeholder="Last Name" className="lName" onChange={handleChange} required/>
                        <input type='text' value={city} name="city" placeholder="City" onChange={handleChange} required />
                        <input type='text' value={email} name="email" placeholder="Email" onChange={handleChange} required />
                        <input type='text' value={country} name="country" placeholder="Country" onChange={handleChange} required />
                        <input type='text' value={phoneNo} name="phoneNo" placeholder="Phone No" onChange={handleChange} required />
                        <input type='text' value={profession} name="profession" placeholder="Profession" className="profession" onChange={handleChange} required />
                        <input type='text' value={socialMedia} name="socialMedia" placeholder="Social Media Handle" className="socialMedia" onChange={handleChange} required />
                        <input type="submit" className='submit'/>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Form