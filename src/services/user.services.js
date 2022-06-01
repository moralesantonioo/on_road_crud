import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

export class UserService {
    async authWithEmailPassword({ email, password }) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.localStorage.setItem('token', user.accessToken)
                window.localStorage.setItem('user', user.email)
                if (window.localStorage.getItem("token") != null) {
                    document.location.replace("/")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    RegisterUser = async ({ email, password }) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user){
                    document.location.replace("/")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
}