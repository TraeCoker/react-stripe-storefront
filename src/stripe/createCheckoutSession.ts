import { db } from "../components/helpers/firebase";
import { useStripe } from "@stripe/react-stripe-js";

export async function createCheckoutSession(uid: string) {
    console.log(uid)
    const checkoutSessionRef = await db
        .collection("users")
        .doc(uid)
        .collection("checkout_sessions")
        .add({
            price: "price_1KQJYNEFpPobBmTkJRfRGC1S",
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        console.log(checkoutSessionRef)
        checkoutSessionRef.onSnapshot(async (snap) => {
            const { sessionId } = snap.data()!;
            if (sessionId) {
                const stripe = useStripe();
                stripe?.redirectToCheckout({sessionId});
            }
        })
}