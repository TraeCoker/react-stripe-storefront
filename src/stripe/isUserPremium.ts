import { auth } from "../components/helpers/firebase";

export default async function isUserPremium(): Promise<boolean> {
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult(true);

    console.log("made it")
    console.log(decodedToken)
    return decodedToken?.claims.stripeRole ? true : false;
}