import { SignInButton } from './SignInButton'
import logo from '../assets/img/arkengine-b.jpg'
import '../scss/Intro.scss'

export const Intro = () => {
  return (
    <div id="component-intro">
      <div className="content">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="title">Arkengine</h1>
        <h2 className="subtitle">borderless economic engine</h2>
        <div className="align-center">
          <SignInButton route={'/home'}/>
        </div>
      </div>
    </div>
  )
}