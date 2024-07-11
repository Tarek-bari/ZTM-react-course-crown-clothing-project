import {SignInContainer, ButtonsContainer} from './sign-in-form.styles'
import { useState } from "react"
import {
    singInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields




    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await singInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/invalid-credential') {
                alert('invalid information')
            } else {
                console.log(err);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label={'Password'} type="password" required onChange={handleChange} name="password" value={password} />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>sign in with google</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm