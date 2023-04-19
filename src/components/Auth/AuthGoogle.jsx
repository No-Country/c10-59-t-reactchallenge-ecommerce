import { auth } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import "../Auth/auth.css";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../../store/slices/userAuth.slice";
import { FcGoogle } from "react-icons/fc";

const AuthGoogle = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    const usuarios = {
      username: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    dispatch(setUserAuth(usuarios));
  }, [user]);

  return (
    <>
      <button onClick={login} className="auth__google-btn">
        <FcGoogle className="g-icon" />
      </button>
    </>
  );
};

export default AuthGoogle;
