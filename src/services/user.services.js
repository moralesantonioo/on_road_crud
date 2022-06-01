import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class UserService {
    async authWithEmailPassword({ email, password }) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.localStorage.setItem('token', user.accessToken)
                if(window.localStorage.getItem("token") != null ){
                    document.location.replace("/")
                }
                console.log(user, 'data');
            })
            .catch((error) => {
                console.log(error)
            });
    }
}