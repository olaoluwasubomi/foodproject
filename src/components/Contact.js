import React from 'react'

export default function Contact() {
  return (
    <div>
        <div>
            <form>
                <label for text>Email Address</label>
                <input type="text" placeholder="Email Address"></input>
                <label for number>Phone Number</label>
                <input type="number" placeholder='Phone Number'></input>
                <label for number>Expiry Date</label>
                <input type="number" placeholder='expiry date'></input>
                
            </form>
        </div>
    </div>
  )
}
