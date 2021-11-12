import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeFirebase from "../Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const auth = getAuth();

    // login process with google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                Swal.fire(
                    'Good job!',
                    'Successfully logged in.',
                    'success'
                )
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // register user
    const registerUser = (name, email, Password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((result) => {
                Swal.fire(
                    'Good job!',
                    'Successfully user created!',
                    'success'
                )
                setUser(result.user);
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // login user
    const loginUser = (email, password, location, history) => {
        Swal.fire(
            'Good job!',
            'Successfully logged in.',
            'success'
        )
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    // observation to user state change when login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    // set admin from the database
    useEffect(() => {
        fetch(`https://floating-brook-78748.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // save user in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://floating-brook-78748.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    // logout process
    const logOut = () => {
        setIsLoading(true);
        Swal.fire(
            'Good job!',
            'Successfully logged out',
            'success'
        )
        signOut(auth)
            .then(() => { })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));

    };

    return {
        user,
        admin,
        authError,
        isLoading,
        signInWithGoogle,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;