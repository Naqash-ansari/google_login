import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'


const LoginGoogle = () => {
    return (
        <GoogleOAuthProvider clientId="286436840151-e3gqr0i05qt5l41elda91j055fq1n92e.apps.googleusercontent.com">

        <GoogleLogin
          onSuccess={credentialResponse => {
            let details = jwt_decode(credentialResponse.credential)
            console.log('details ', details);
            console.log('red', credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    )
}

export default LoginGoogle
