import ssLogo from './assets/surveysparrow-logo.png'
import boaLogo from './assets/boa-logo.jpg'
import JSTS from './assets/JSTSlogo.jpg';
import Java from './assets/Java-Logo.png';
import MongoDB from './assets/mongo.png';
import Redux from './assets/Redux.png';
import SQL from './assets/SQL.png';
import ReactImg from './assets/react.png'; 
import Express from './assets/ExpressLogo.png';
import Node from './assets/node.png';
import ElasticSearch from './assets/elasticsearch-b-v-logo-vector.png';
import Redis from './assets/redis_logo-1.png';
import AWS from './assets/AWSlogo.jpg';



export const services = [
    {
        title: "JavaScript and TypeScript",
        icon: JSTS,
    },
    {
        title: "Java",
        icon: Java,
    },
    {
        title: "NodeJS",
        icon: Node,
    },
    {
        title: "ReactJS",
        icon: ReactImg,
    },
    {
        title: "Redux",
        icon: Redux,
    },
    {
        title: "Express",
        icon: Express,
    },
    {
        title: "SQL",
        icon: SQL,
    },
    {
        title: "Elastic Search",
        icon: ElasticSearch,
    },
    {
        title: "Redis",
        icon: Redis,
    },
    {
        title: "AWS",
        icon: AWS,
    },
];

export const name = 'Dishanth';

export const experiences = [
    {
        'company': 'SurveySparrow',
        'role': 'Senior Software Developer',
        'duration': 'Oct 2022 - Present',
        'logo': ssLogo,
        'points': [
            'Launched Spotchecks, an advanced website survey embedding feature. Implemented a single snippet solution to display different surveys based on configurable conditions. Utilized React , NodeJS and OpenSearch to boost survey completion by 40%, feedback quality by 35%, and user engagement by 25%', 
            'Harnessed Generative AI via Microsoft Azure’s AI Vision and OpenAI’s GPT-4 Vision to auto-generate detailed image descriptions in survey questions, cutting manual input time by 70% and enhancing user experience for visually impaired users by 40%',
            'Migrated user survey participation limits from the database to a specialized counting microservice powered by Redis and DynamoDB, resulting in 30 % reduction in Survey EUI load and database utilization during user responses.',
            'Mentored and guided a cohort of 5 interns through technical training, reducing onboarding time by 40% and boosting their productivity by 50%, significantly enhancing team output and project completion rates'
        ],
        'url': 'https://surveysparrow.com/',
    },
    {
        'company': 'Bank of America',
        'role': 'Technical Associate',
        'duration': 'Jun 2022 - Sept 2022',
        'logo': boaLogo,
        'points': [
            'Created a robust Python automation comparison tool for analyzing non-dimensional data records, improving data processing speed by 50%',
            'Developed a data collection tool using pandas, storing and categorizing over 1,000 production issue emails, enhancing issue tracking efficiency by 40%'
        ],
        'url': 'https://www.bankofamerica.com/',
    },
]



export const EMAIL_JS_SERVICE_ID = 'service_90wb9t5';
export const EMAIL_JS_TEMPLATE_ID = 'template_8l87rew';
export const EMAIL_JS_PUBLIC_KEY = 'pHPjc9RGGkF66r86N';