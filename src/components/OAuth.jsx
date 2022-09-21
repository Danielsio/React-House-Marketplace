import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import googleIcon from "../assets/svg/googleIcon.svg"

function OAuth() {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      // get auth variable
      const auth = getAuth()

      // initialize google provider
      const provider = new GoogleAuthProvider()

      // get the result from the sign-in action
      const result = await signInWithPopup(auth, provider)

      // get hold of the user
      const user = result.user

      // create reference to the document on firestore
      const docRef = doc(db, "users", user.uid)

      // read the document from the db
      const docSnap = await getDoc(docRef)

      // if user doesn't exists, create the user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("something went wrong, please try again later")
    }
  }

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  )
}

export default OAuth
