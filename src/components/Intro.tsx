import { SignInButton } from './SignInButton'
import '../scss/Intro.scss'

export const Intro = () => {
  return (
    <div id="component-intro">
      <div className="content">
        <h1 className="title">Arkengine</h1>
        <h2 className="subtitle">borderless economic engine</h2>
        <div className="align-center">
          <SignInButton route={'/home'}/>
        </div>
      </div>
    </div>
  )
}