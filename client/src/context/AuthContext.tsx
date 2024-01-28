import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import '../firebase'
import { User } from 'firebase/auth'

interface AuthContextProps {
  user: User | null
  logout: () => void
  signInWithGoogle: () => Promise<void>
}

const defaultValue: AuthContextProps = {
  user: null,
  logout: () => {},
  signInWithGoogle: async () => {}
}

const AuthContext = createContext<AuthContextProps>(defaultValue)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signInWithGoogle = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    console.log(res)
  }

  const logout = () => {
    const auth = getAuth()
    return signOut(auth)
  }

  const memoVal = useMemo(
    () => ({
      user: currentUser,
      signInWithGoogle,
      logout
    }),
    [currentUser]
  )

  return (
    <AuthContext.Provider value={memoVal}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
