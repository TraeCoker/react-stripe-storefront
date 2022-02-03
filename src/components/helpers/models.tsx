
export interface Feature {
    icon: number;
    heading: string;
    text: string;
}
export interface Product {
    id: number;
    name: string;
    description: string;
    details: string[];
    images: string[];
    amount: number;
    currency: string;
    quantity: number;
}

// export interface CardDetails {
//     id: number;
//     details: string[];
//     price: string;
//     product: Product;
// }

export interface ReviewObject {
    name: string;
    imageURL: string;
    heading: string;
    text: string;
}

export const reviews: ReviewObject[] = [
    {
        name: "Sheila Quinn",
        imageURL: "img/review-1-med.jpg",
        heading: "My life just keeps getting better",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore."
    },
    {
        name: "Robert Paulson",
        imageURL: "img/review-2-med.jpg",
        heading: "I'm healthier than I've ever been",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore."
    },
]

export const features: Feature[] = [
    {
        icon: 1,
        heading: "Find your center",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 2,
        heading: "Build community",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 3,
        heading: "Nourish your body",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 4,
        heading: "Find your bliss",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
]

export const courses: Product[] = [
    {
        id: 1,
        name: "THRIVE Nutrition",
        description: "Fuel your body with this 12 week nutrition course",
        details: [
             "12 week course",
            "Personalized meal plans",
            "1 on 1 nutrition coaching",
            "Find the right foods for your body",
            "Complimentary microbiome test"
        ],
        images: [ 'img/food-3-med.jpg' ],
        amount: 15000,
        currency: 'usd',
        quantity: 1
    },
    {
        id: 2,
        name: "Mindful Mastery",
        description: "Master your inner world and gain self knowledge",
        details: [
             "3 Month course",
            "Daily practice videos",
            "Taught by world-renowned instructors",
            "Weekly Q and A",
            "Group practice session"
        ],
        images: [ 'img/yoga-4-med.jpg' ],
        amount: 15000,
        currency: 'usd',
        quantity: 1
    },
    {
        id: 3,
        name: "Functional Strength",
        description: "Let movement be your medicine. Regain ranges of motion and gain strength.",
        details: [
             "12 week course",
            "1 on 1 coaching",
            "Tailored to your embodiement goals",
            "Follow along classes",
            "Myofascial release bonus course"
        ],
        images: [ 'img/food-3-med.jpg' ],
        amount: 15000,
        currency: 'usd',
        quantity: 1
    }
]

