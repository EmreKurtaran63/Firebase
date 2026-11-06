import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutputIcon from '@mui/icons-material/Output';
import { signOut } from 'firebase/auth';
import { auth } from '../config/FirebaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import firebase from "/firebase.png";





function Header() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);
    })
  }, [])
  const navigate = useNavigate();

  const signOutAuth = async () => {
    toast.promise(signOut(auth), {
      pending: "Çıkış yapılıyor...",
      success: "Çıkış işlemi Başarılı",
      error: "Çıkış yapılamadı..."
    }, { theme: "colored", autoClose: 3000 })
    navigate("/");
  }

  return (
    <div className='Header-div'>
      <div className="Header-text-div">
        <div style={{ width: "50px", height: "50px", borderRadius: "100%", boxShadow: "0px 0px 10px #f89a60" ,textAlign:"center"}}>
          <img style={{height: "90%" }} src={firebase} />
        </div>
        <h3 className='Header-text' style={{textShadow:" 5px 5px 50px white"}}> FİREBASE</h3>
      </div>

      <Stack spacing={2} direction="row">
        {user && <Button onClick={signOutAuth} variant="contained" color="error" size='small'> Çıkış Yap<OutputIcon sx={{ marginLeft: "10px" }} /></Button>}
      </Stack>

    </div >
  )
}

export default Header