import React from 'react'
import AuthGoogle from './AuthGoogle';

import SingIn from './SingIn';
import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import Signup from './Signup';


const Auth = () => {
  

  return (
<>
<AuthGoogle/>

 </>
  )
}

export default Auth
