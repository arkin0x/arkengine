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
    const success = await getPublicKey()
    if (success) {
      // store pubkey in identity provider
      setIdentity({pubkey: success})
      // redirect to account page
      navigate('/login')
    } else {
      // trigger "key not set up yet" dialog
    }
  }
  if (isIdentityFresh()) {
    return (
      <button onClick={() => navigate(route)}>Opt In to Freedom</button>
    )
  } else {
    return (
      <button onClick={signIn}>Sign in with Extension</button>
    )
  }
}