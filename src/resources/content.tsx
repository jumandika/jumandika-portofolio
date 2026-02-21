import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Achmad",
  lastName: "Jumandika",
  name: `Achmad Jumandika`,
  role: "Sr. Mobile Engineer",
  avatar: "/images/jumandika.png",
  email: "dika1453@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jumandika",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/achmad-jumandika-5551b9127",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/jumandikaalanshori/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@jumandikaalanshori?xmt=AQF0oixwPWsKd1B98lrM52MXFNIRMvq0sXNCR_veP-CAvuw",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio mobile app showcasing my work as a ${person.role}`,
  headline: <>Building high quality and convenience mobile app</>,
  featured: {
    display: true,
    title: (
      <Row horizontal="center" vertical="center">
        {/* <strong className="ml-4">Once UI</strong>{" "} */}
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        <Text onBackground="brand-medium">
          {"Featured work"}
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Dika, a dedicated <Text as="span" size="xl" weight="strong">Mobile Engineer</Text>, where I had involved <br /> many various projects and clients.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Experienced in developing a wide range of mobile applications, including e-commerce platforms, insurance apps, hotel booking apps, audio/video streaming apps, inventory management apps, and banking solutions. Specializing in building high-performance, cross-platform apps using React Native technology. 
        <br/>Passionate about tackling challenges and advancing my career, I am dedicated to delivering top-quality mobile applications with clean, maintainable code, intuitive user interfaces, seamless user experiences, and optimized mobile app performance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kodegiri",
        companyIcon: {
          src: "/images/company/kodegiri.png",
          height: 5,
          width: 5,
          alt: ""
        },
        timeframe: "2021 - Present",
        role: "Senior Mobile Engineer",
        achievements: [
          <>
            Working remotely for many projects for different many clients such as myGarda (Asuransi Astra Buana), Kadou App (Toyota Astra Motor), Miruum App (Hotel Booking App), Bengkel Mania App, The Kayon App (Online Travel Agent), Route de l'absinthe App.
          </>,
          <>
            Defined technical solutions based on best practices to meet client requirements and improve end-user convenience.
          </>,
        ],
        images: [
          {
            src: "/images/projects/myGarda.png",
            alt: "myGarda",
            width: 4,
            height: 3,
          },
          {
            src: "/images/projects/kadou.jpg",
            alt: "kadou",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/thekayon.jpeg",
            alt: "the kayon",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/miruum.png",
            alt: "miruum",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/routedelabsinthe.png",
            alt: "routedelabsinthe",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        company: "Midas Daya Teknologi",
        companyIcon: {
          src: "/images/company/midas.png",
          height: 5,
          width: 5,
          alt: ""
        },
        timeframe: "2023 - 2025",
        role: "Senior Mobile Engineer",
        achievements: [
          <>
            Selected as the first Indonesia-based developer for Bank Saqu’s mobile application, collaborating within a multinational team. Served as a lead pilot user to evaluate and determine technical solutions during the project's foundational phase.
          </>,
          <>
            Contributed to the Community of Practice to establish design system standards, resulting in a 30% increase in development efficiency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/saqu.jpeg",
            alt: "maxstream",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        company: "Halalfresh Indonesia",
        companyIcon: {
          src: "/images/company/halalfresh.jpeg",
          height: 3,
          width: 5,
          alt: ""
        },
        timeframe: "2020 - 2023",
        role: "Mobile App Developer",
        achievements: [
          <>
            Build new Mobile Applications both iOS and Android from scratch using cross platform technology React Native. This is e-commerce platforms Halalfresh App that selling daily groceries and deliver it to the customer.
          </>,
          <>
            Founding developer responsible for architecting and building the MVP from initial concept to a production-ready launch.
          </>,
        ],
        images: [],
      },
      {
        company: "Suitmedia Kreasi Indonesia",
        companyIcon: {
          src: "/images/company/suitmedia.png",
          height: 5,
          width: 5,
          alt: ""
        },
        timeframe: "Feb 2022 - Jul 2022",
        role: "React Native Developer",
        achievements: [
          <>
            Contributed to the development of Telkomsel’s Maxstream, collaborating within a large-scale multinational environment. This role marked my professional debut in a global team, working alongside developers from Singapore, China, Taiwan, Australia, India, and Pakistan.
          </>,
        ],
        images: [
          {
            src: "/images/projects/maxstream.webp",
            alt: "maxstream",
            width: 3,
            height: 3,
          },

        ],
      },
      {
        company: "Integrasi Logistik Cipta Solusi",
        companyIcon: {
          src: "/images/company/ilcs.webp",
          height: 5,
          width: 5,
          alt: ""
        },
        timeframe: "2019 - 2020",
        role: "Mobile App Developer",
        achievements: [
          <>
            Launched my professional career by developing a Vessel Management System (VMS) mobile application for Pelindo II, utilizing Cordova hybrid app technology.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Nusa Mandiri University",
        description: <>Studied Information System.</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React Native",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
