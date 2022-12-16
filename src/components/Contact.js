import React from 'react'
import '../css/Contact.css'
const Contact = () => {
  return (
    <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>Alejandro Moreno</span>
            <span>Contacts</span>
          </div>
          <div class="app-contact">Phone Number: +1 713-614-2961</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" value="alex.moreno161100@gmail.com"/>
            </div>
            <div class="app-form-group">
              <a href="https://github.com/amoreno16003">GitHub</a>
            </div>
            <div class="app-form-group">
              <a href="https://www.linkedin.com/in/amoreno00?trk=public_profile_browsemap">Linked In</a>
            </div>
            <div class="app-form-group message">
             
            </div>
            <div class="app-form-group buttons">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

  )
}

export default Contact