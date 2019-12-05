import React, { Component } from 'react'
import NavPart from '../components/NavPart';
import MainCarousel from '../components/MainCarousel';
import Section2 from '../components/Section2';
export default class Error extends Component {
    render() {
        return (
            <div>
<NavPart />
<div className="registerAndLogin">
  <p>Register</p>
  <p>Login</p>
</div>
<MainCarousel />
<Section2 />
            </div>
        )
    }
}
