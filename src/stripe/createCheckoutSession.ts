import { db } from "../components/helpers/firebase";
import { stripePromise } from "..";

export async function createCheckoutSession(uid: string, price: string) {
    console.log(uid)
    const checkoutSessionRef = await db
        .collection("users")
        .doc(uid)
        .collection("checkout_sessions")
        .add({
            price,
            success_url: "https://the-source.netlify.app//courses",
            cancel_url: window.location.origin,
        });

        checkoutSessionRef.onSnapshot(async (snap) => {
            const { sessionId } = snap.data()!;
            if (sessionId) {
                const stripe = await stripePromise;
                stripe?.redirectToCheckout({sessionId});
            }
        })
}