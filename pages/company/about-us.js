import Layout from "../../components/layouts/landing";
const AboutUs = () => {
    const faqs = [
        {
            id: 1,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            id: 2,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            id: 3,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            id: 4,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            id: 5,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            id: 6,
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        // More questions...
      ]
    return (
        <Layout>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
                    <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {faqs.map((faq) => (
                        <div key={faq.id}>
                            <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                            <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                </div>
        </Layout>
    );
}
 
export default AboutUs;