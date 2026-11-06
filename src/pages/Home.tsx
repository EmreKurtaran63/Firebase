import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../config/FirebaseConfig';
import { useState, useEffect } from 'react';


function Home() {
  const [user, setUser] = useState<User | null>();
  
  useEffect(() => {

    onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);
    })
  }, [])



  return (
    <div style={{textAlign:"center"}}>Hoşgeldiniz: {user?.displayName ? user?.displayName : user?.email }</div>
  )
}

export default Home