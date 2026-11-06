/*  MUI */
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
/*  İcons   */
import LoginIcon from '@mui/icons-material/Login';
import SaveIcon from '@mui/icons-material/Save';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import FacebookIcon from '@mui/icons-material/Facebook';
/*  MUI Son */

import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, OAuthProvider, signInWithPopup, type AuthProvider } from 'firebase/auth';
import { auth } from '../config/FirebaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const googleProvider: AuthProvider = new GoogleAuthProvider();
const facebookProvider: AuthProvider = new FacebookAuthProvider();
const githubProvider: AuthProvider = new GithubAuthProvider();
const twitterProvider: AuthProvider = new TwitterAuthProvider();
const microsoftProvider: AuthProvider = new OAuthProvider('microsoft.com');
function Register() {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const loginWithOtherOptions = async (provider: AuthProvider) => {

    try {
      const response = await signInWithPopup(auth, provider);
      if (response.user) {
        toast.success(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Giriş başarılı</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>Keyifli zamanlar dileriz...</div></div>, { theme: "colored", autoClose: 3000, ariaLabel: 'Email received', });
        navigate("/Home");
      }
    } catch (error) {
      toast.error(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Giriş işlemi başarısız!</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>{(error as Error).message}</div></div>, { theme: "colored", autoClose: 3000 });
    }

  }

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, mail, password);
      if (response.user) {
        navigate("/Home");
        toast.success(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Giriş başarılı</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>Keyifli zamanlar dileriz...</div></div>, { theme: "colored", autoClose: 3000, ariaLabel: 'Email received', });
        setMail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Giriş işlemi başarısız!</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>{(error as Error).message}</div></div>, { theme: "colored", autoClose: 3000 });
    }
  }

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, mail, password);
      const user = response.user;
      if (user) {
        toast.success(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Kayıt işlemi başarılı</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>Kullanıcı oluşturuldu...</div></div>, { theme: "colored", autoClose: 3000, ariaLabel: 'Email received', });
        setMail("");
        setPassword("");

      }
    } catch (error) {
      toast.error(<div><div style={{ fontWeight: "bold", fontSize: "16px" }}>Kayıt işlemi başarısız!</div><div style={{ fontWeight: "normal", fontSize: "12px" }}>{(error as Error).message}</div></div>, { theme: "colored", autoClose: 3000 });
    }


  }
  return (
    <div className="Register-Container">
      <div className="Register-form">
        <h3 className="Register-header-text"> Kayıt ol/Giriş Yap</h3>

        <TextField value={mail} onChange={(e) => setMail(e.target.value)} variant='outlined' id="email" color='warning' label="E-posta adresinizi giriniz..." sx={{
          width: "300px",
          input: { color: '#fff' }, // Yazı rengini beyaz yapar
          '& .MuiInputLabel-root': { color: '#aaa' }, // Label (etiket) rengi
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#555' }, // Çerçeve rengi
            '&:hover fieldset': { borderColor: '#888' },
            '&.Mui-focused fieldset': { borderColor: 'Darkorange' },
          },
        }} />

        <TextField value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' id="password" color='warning' label="Şifre" sx={{
          width: "300px",
          input: { color: '#fff' }, // Yazı rengini beyaz yapar
          '& .MuiInputLabel-root': { color: '#aaa' }, // Label (etiket) rengi
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#555' }, // Çerçeve rengi
            '&:hover fieldset': { borderColor: '#888' },
            '&.Mui-focused fieldset': { borderColor: 'Darkorange' },
          },
        }} />

        <Stack spacing={2} direction="row">
          <Button onClick={login} variant="contained" color="warning" size='small' sx={{boxShadow:"0px 0px 10px darkorange",fontWeight:"700",fontFamily:"revert"}}> Giriş Yap <LoginIcon sx={{ marginLeft: "10px" }} /></Button>
          <Button onClick={register} variant="contained" color="success" size='small'sx={{boxShadow:"0px 0px 10px green",fontWeight:"700",fontFamily:"revert" }}> Kayıt Ol <SaveIcon sx={{ marginLeft: "10px"}} /></Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button onClick={() => loginWithOtherOptions(googleProvider)} variant="contained" color="error" size='small'sx={{boxShadow:"0px 0px 20px red"}}> <GoogleIcon /></Button>
          <Button onClick={() => loginWithOtherOptions(facebookProvider)} variant="contained" color="info" size='small' sx={{boxShadow:"0px 0px 20px blue"}}> <FacebookIcon /></Button>
          <Button onClick={() => loginWithOtherOptions(twitterProvider)} variant="contained" color="inherit" size='small'sx={{backgroundColor:"#111111",boxShadow:"0px 0px 6px white"}}> <XIcon /></Button>
          <Button onClick={() => loginWithOtherOptions(githubProvider)} variant="contained" color="success" size='small' sx={{backgroundColor:"#000000",boxShadow:"0px 0px 6px white"}}> <GitHubIcon /></Button>
          <Button onClick={() => loginWithOtherOptions(microsoftProvider)} variant="contained" color="secondary" size='small'sx={{boxShadow:"0px 0px 20px #8400ff"}}> <MicrosoftIcon /></Button>

        </Stack>
      </div>

    </div>
  )
}

export default Register