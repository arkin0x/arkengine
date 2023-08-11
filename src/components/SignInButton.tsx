import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { IdentityContextType } from "../types/IdentityType"
import { IdentityContext } from "../providers/IdentityProvider"
import { getPublicKey } from "../libraries/NIP-07"

type SignInButtonProps = {
  route: string
}

export const SignInButton = ({ route }: SignInButtonProps) => {
  const { setIdentity, isIdentityFresh } = useContext<IdentityContextType>(IdentityContext)
  const navigate = useNavigate()

  const signIn = async () => {
    // trigger sign in with extension
    try {
      const success = await getPublicKey()
      if (success) {
        // store pubkey in identity provider
        setIdentity({pubkey: success})
        // redirect to account page
        navigate('/login')
      } else {
        // trigger "key not set up yet" dialog
        console.log('not success', success)
      }
    } catch (e) {
      console.log('sign in failed:', e)
      // TODO: provide info on how to get a NIP-07 extension.
    }
  }
  if (isIdentityFresh()) {
    return (
      <button onClick={() => navigate(route)}>Start Your Engines</button>
    )
  } else {
    return (
      <button onClick={signIn}>Sign In</button>
    )
  }
}