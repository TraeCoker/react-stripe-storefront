import { db } from "../components/helpers/firebase";
import { stripePromise } from "..";

export async function createCheckoutSession(uid: string) {
    console.log(uid)
    const checkoutSessionRef = await db
        .collection("users")
        .doc(uid)
        .collection("checkout_sessions")
        .add({
            price: "price_1KQJYNEFpPobBmTkJRfRGC1S",
            success_url: "http://localhost:3001/courses",
            cancel_url: window.location.origin,
        });

        console.log(checkoutSessionRef)
        checkoutSessionRef.onSnapshot(async (snap) => {
            const { sessionId } = snap.data()!;
            if (sessionId) {
                const stripe = await stripePromise;
                stripe?.redirectToCheckout({sessionId});
            }
        })
}