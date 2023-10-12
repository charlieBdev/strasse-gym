import { onAuthStateChanged, getAuth } from 'firebase/auth'
import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
import { Loading } from '../app/components/Loading'
import { firebase_app } from '../../config'

const auth = getAuth(firebase_app)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}