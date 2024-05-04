import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import pic from '/public/profile.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Tourism App',
        description: "Introducing Travel Mate, a revolutionary travel app built with the innovative MERN stack, offering seamless hotel booking, personalized tour guide selection, AI-driven budget-friendly destination recommendations, and a user-friendly interface powered by React.js. Experience additional features like user registration with profile management, interactive maps and guides, social networking integration, and language translation for effective communication during your travels. Transform your journey with Travel Mate, your ultimate travel companion.",
        tools: ['Express', 'MongoDB', 'OpenAI API',  'Next js', 'Mongo DB', 'Flutter'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Inventory Store Application | MERN Stack Project',
        description: 'I Developed a dynamic Inventory Store Application with the MERN stack, enabling efficient stock management. Key features include CRUD functionality for product management, user authentication, MongoDB Atlas integration for database management, and an intuitive React.js interface. Technologies used: MongoDB, Express.js, React.js, Node.js, JavaScript, HTML5, CSS3. This project showcases my expertise in full-stack development and building robust web applications.',
        tools: ['ReactJS', 'Tailwind CSS', "Google Maps", "Node JS", "Express JS", "MongoDB"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB' ],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Currency Converter App ',
        description: "My team and I developed A user-friendly tool built to effortlessly convert currencies in real-time, providing accurate exchange rates for seamless global transactions. Powered by cutting-edge technology, this app ensures swift and reliable currency conversions, simplifying international monetary exchanges for users worldwide",
        tools: ['Flutter', 'Material UI',  "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Mobile App Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },