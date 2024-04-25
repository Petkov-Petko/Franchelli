import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <div className='contactsPage'>
    <div className='contacts'>
        <div className='contactsDetails'>
        <h2>Contacts</h2>
            <h4>If you have any questions or just want to share your opinion, feel free to contact us at any time!</h4>
            <h4>Opening hours of Franchelli restaurants:</h4>
            <p>From 8 am to 23 p.m., every day</p>
            <h4>Phones for reservations:</h4>
            <p>Franchelli Varna /Evlogi Georgiev 47 Str./ -0123-421-421</p>
            <h4>Emails to contact managers (for compliments, complaints or questions):</h4>
            <p>manager@Franchelli.bg</p>
        </div>
    <div className='contactsFrom'>
        <h3>Send us a message:</h3>
        <form>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='Email'></input>
            <textarea placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contacts