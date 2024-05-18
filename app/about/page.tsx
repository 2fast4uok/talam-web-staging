import { genPageMetadata } from 'app/seo'
import HeroSection from '../../components/HeroSection'
import OurWorkAreas from '../../components/OurWorkAreas'
import ProductSection from '../../components/ProductSection'
import TeamSection from '../../components/TeamSection'
import ContactUsSection from '../../components/ContactUsSection'
import ScrollTop from '@/components/ScrollTop'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const economyProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Donation Gateway',
      description:
        'A digital gateway for Auroville entities to receive Indian and international donations into the Auroville Unity Fund. The system offers real time automated reporting of the donations with a dashboard to track donations received.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Talam Pay',
      description:
        'A digital payment system for Auroville entities to receive payments for their goods and services through Auroville Financial Service, Indian or international banks. Payments come to Auroville Maintenance Fund and from there to the FS account of the entity. The Auroville entities do not require a bank account to use this service. The system offers real time automated reporting of the donations with a dashboard to track payments received.',
    },
    // Add more products as needed
  ]
  const managementProducts = [
    {
      // icon: <Product2Icon />,
      title: 'Savi volunteer management system',
      description:
        'An online system for Savi, Auroville’s volunteer service, to manage data of volunteers and monitor their work and stay history.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Guest Registration and Accommodation Service management system',
      description:
        'An online system for Auroville’s Guest service for maintaining data of the guests, and automating the filling of C-form for non-Indian guests.',
    },
    {
      // icon: <Product1Icon />,
      title: 'Newcomer Application Management System',
      description:
        'An online system for the Entry Service to manage the Newcomer Application Process.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Residents Service Data Management System',
      description: "An online system for the Resident Service to manage the residents' data.",
    },
    {
      // icon: <Product2Icon />,
      title: 'House Transfer Management System',
      description:
        'An online system for the Housing Service to manage the transfer of available houses.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Matrimandir Booking System',
      description:
        'An online system for the Matrimandir team to manage the visitors who want to book their visits to the inner chamber.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Transport Booking',
      description:
        'An online system to book from different transportation service providers in Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Visitors Parking Management System',
      description:
        'An online system for the Visitors Centre to manage the vehicle parking of the visitors and related payments and processes.',
    },
  ]
  const communicationProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Events Calendar',
      description: 'Online events calendar system.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Cocreate',
      description: 'Ecosystem for Creators, Contributors & Patrons for Cocreating Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Directory',
      description: 'The telephone and email directory of Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Bazaar',
      description: 'A platform to exchange goods and services.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Aurostat',
      description: 'Providing statistical data on Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Comment Server',
      description: 'A system to provide discussion feature across multiple applications.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Auronet',
      description: "Auroville's intranet portal.",
    },
    {
      // icon: <Product2Icon />,
      title: 'Auroville.org',
      description: 'The main public website of Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Proposals',
      description: 'Enable people to propose new ideas and get support from the community.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Art for Land',
      description:
        'Artforland.in sells art work to fund raise for land purchase for Auroville. Talam develops and maintains the tech platform for the Art For Land team.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Taxi Sharing',
      description: 'A platform to enable share taxi rides.',
    },
    // Add more products as needed
  ]
  const educationProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Think Like a Robot',
      description:
        'A one-day workshop for students of grade 6 and above. The objective of this workshop is to introduce students to several technologies used in FarmBot like Robotics, IoT and Computer Vision (a sub-field of AI).',
    },
    {
      // icon: <Product1Icon />,
      title: 'Youth Capacity Building in IT',
      description:
        "Talam provides hands-on training for Auroville and Bioregion Youth who are interested in contributing to Auroville's growth in the IT sector.",
    },
    {
      // icon: <Product2Icon />,
      title: 'Auroville Campus Platform',
      description:
        'An online platform to connect learners coming to Auroville with the learning opportunities and mentors.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Integral Education Portal',
      description:
        'An online system to manage Integral Education Newsletter and its mailing list subscribers.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Integral Education Wiki',
      description:
        'A wiki for collating and sharing the foundational knowledge from the Mother and Sri Aurobindo on Integral Education.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Telos',
      description: 'An online system providing consciousness mapping tools based on Telos Model.',
    },
    // Add more products as needed
  ]
  const itInfraProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Backup service',
      description: 'Data backup on the cloud.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Checkbot',
      description: 'Application monitoring and reporting tool.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Plausible',
      description: 'Privacy aware user analytics.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Kubernetes',
      description: 'Deployment infrastructure for Auroville apps.',
    },
    {
      // icon: <Product2Icon />,
      title: 'OAuth2 Server',
      description:
        'Common login system using OAuth2 server protocol used by multiple services within Auroville.',
    },
    {
      // icon: <Product2Icon />,
      title: 'Cetana',
      description: 'IoT Platform for Auroville.',
    },
    // Add more products as needed
  ]
  const sustainabilityProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Borewell Water Level Monitoring System',
      description:
        'An online system for CSR Water Team to automatically track water levels across borewells using IoT Lorawan technology.',
    },
    // Add more products as needed
  ]
  const researchProducts = [
    {
      // icon: <Product1Icon />,
      title: 'Heliostat',
      description:
        'A digital gateway for Auroville entities to receive Indian and international donations into the Auroville Unity Fund. The system offers real time automated reporting of the donations with a dashboard to track donations received.',
    },
    {
      // icon: <Product2Icon />,
      title: 'EnvBot',
      description: 'Environment Monitoring system - under research and development.',
    },
    {
      // icon: <Product2Icon />,
      title: 'FarmBot',
      description: 'Farming automation system - under research and development.',
    },
    // Add more products as needed
  ]

  const teamMembers = [
    {
      name: 'Manoj',
      role: 'Co-founder',
      bio: 'I woke up around the age of 21, I had no clue of what was going around me. All that I knew was that I was getting manufactured for the industry to consume. Then I ran for my life till I reached Sri Aurobindo who gave me a new vision. Now I am here among you..@home.',
      image: '/team/Manoj.jpeg',
      instagram: 'https://www.linkedin.com/in/johndoe/',
      facebook: 'https://twitter.com/johndoe/',
      linkedin: 'https://github.com/johndoe/',
    },
    {
      name: 'Shankardevy',
      role: 'Co-founder',
      bio: 'I\'m inspired by the dream of Auroville and aspire "to be a true aurovilian". At Tālam I take care of setting the technology roadmap for various works that we do taking into consideration the overarching needs of Auroville.',
      image: '/team/Shankardevy.jpeg',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      twitter: 'https://twitter.com/janesmith/',
      github: 'https://github.com/janesmith/',
    },
    // {
    //   name: 'Nittin',
    //   role: 'Senior Developer',
    //   bio: "I'm a young adult passionately developing software for more than 4 years. The verticals of my projects include FinTech, Web3, Community Management, Tourism, etc. I love to teach and interact with students about technology.",
    //   image: '/team/Nittin.jpeg',
    //   linkedin: 'https://www.linkedin.com/in/janesmith/',
    //   twitter: 'https://twitter.com/janesmith/',
    //   github: 'https://github.com/janesmith/',
    // },
    {
      name: 'Rahul',
      role: 'Senior Developer',
      bio: 'I specialize in developing software applications, proposing innovative solutions, and mentoring fellow team members. Outside of work, I am passionate about badminton, jogging, cycling, and swimming. Since 2011, I have been dedicated to studying and practicing the integral yoga of Sri Aurobindo and the Mother, enriching both my personal and professional journey. Additionally, I have valuable experience volunteering with organizations in the fields of Education, Arts & Culture, Youth, and Spirituality, further contributing to my holistic approach to life.',
      image: '/team/Rahul.jpeg',
      github: 'https://github.com/janesmith/',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      instagram: 'https://www.linkedin.com/in/janesmith/',
      facebook: 'https://www.linkedin.com/in/janesmith/',
    },
    // {
    //   name: 'Vikram',
    //   role: 'Developer',
    //   bio: "I'm currently learning web and mobile app development at Tālam and actively contributing to projects, including our CuriousBot initiative. Holding a Bachelor's in Agriculture Engineering, I bring a diverse perspective to my tech endeavors.Beyond work, I'm known for my jovial nature—someone you can share laughs, learn, and exchange knowledge with effortlessly.",
    //   image: '/team/Vikram.jpeg',
    //   linkedin: 'https://www.linkedin.com/in/janesmith/',
    //   twitter: 'https://twitter.com/janesmith/',
    //   github: 'https://github.com/janesmith/',
    // },
    // {
    //   name: 'Rashmi',
    //   role: 'Designer',
    //   bio: "I'm a B.A. French student in Auroville, currently learning UI/UX design at Tālam. With a year of experience, my creative prowess extends to Figma and Canva. Beyond the screen, I explore new places, immerse myself in music, and capture moments through photography. My goal is to become an expert UI/UX designer, crafting seamless digital experiences that combine language, design, and a love for exploration.",
    //   image: '/team/Rashmi.jpeg',
    //   linkedin: 'https://www.linkedin.com/in/janesmith/',
    //   twitter: 'https://twitter.com/janesmith/',
    //   github: 'https://github.com/janesmith/',
    // },
    {
      name: 'Shardul',
      role: 'Developer',
      bio: "I work as a developer at Tālam, where I am actively learning web development and contributing to the CuriousBot initiative. My journey began before completing high school, and I've gained experience in various fields, including forest work, carpentry, solar industry, and warehouse stock management. As an Auroville-schooled adult, I've accumulated over 12 years of work experience by the age of 28, bringing a diverse range of skills and experiences to my current role.",
      image: '/team/Shardul.jpeg',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      twitter: 'https://twitter.com/janesmith/',
      github: 'https://github.com/janesmith/',
    },
    // Add more team members as needed
  ]

  return (
    <>
      <div>
        <ScrollTop />
        <HeroSection
          heading="Coding for World's First"
          subheading="Open-Source City"
          description="We are coding software for Auroville, the world's first open-source city for 50,000 volunteers - prototyping an ideal society."
          imageUrl="/auroville_galaxy_plan.jpeg"
        />
        <OurWorkAreas
          heading="WHAT WE DO?"
          subheading="Areas of our work"
          description="Talam works on the following broad areas of work. Scroll down to see details of each area."
        />
        <ProductSection
          workAreaTitle="Economy"
          workAreaDescription="Enable Auroville with modern technologies to realise higher goals of creating a new kind of economy while providing efficient, transparent and accountable systems for the present day reality where money plays a vital role. Present reality and the future potential are both equally important. Auroville needs research and development to invent the new model of economy that aligns with the Dream of Auroville. At the same time, we need Fintech and Regtech solutions to make our current day internal and external financial transactions cashless, easy, efficient, transparent and accountable using modern technology in adherence to both the community guidelines and the government regulations."
          products={economyProducts}
        />
        <ProductSection
          workAreaTitle="Management"
          workAreaDescription="Transparent and efficient management systems for the community to work efficiently towards the Dream.
          Transparent and efficient management systems for the community to work efficiently towards the Dream."
          products={managementProducts}
        />
        <ProductSection
          workAreaTitle="Communication"
          workAreaDescription="Communication tools to effectively share information both within the community and to the world at large.

          Communication is key for collaboration. Auroville needs better collaboration within, with our bioregion and with the larger world. We need more people who are aligned to our vision to join the community or collaborate with Auroville from wherever they are. All these begins with communication."
          products={communicationProducts}
        />
        <ProductSection
          workAreaTitle="Education"
          workAreaDescription="Develop online platforms enabling sharing of knowledge between Auroville and the larger world.
          Auroville is an institution of Higher Education under the Ministry of Education and we see Auroville as a new type of University. Online education is the emerging future of the world and we want to enable Auroville in this direction.
          In collaboration with Auroville Campus Initiative we have the following projects."
          products={educationProducts}
        />
        <ProductSection
          workAreaTitle="IT Infrastructure"
          workAreaDescription="Software and hardware infrastructure for Auroville apps.
          Talam develops or uses several other open source software and hardware providing features shared by applications built for Auroville."
          products={itInfraProducts}
        />
        <ProductSection
          workAreaTitle="Sustainability"
          workAreaDescription="Sustainability in Food. Water. Shelter.
          Research and development in tech solutions towards sustainable living."
          products={sustainabilityProducts}
        />
        <ProductSection
          workAreaTitle="Research & Innovation"
          workAreaDescription="Going beyond what is comfortable and venturing into the unknown.
          A range of tech-enabled products that use cutting edge technology to provide solutions to the problems we face or simply provide an opportunity to stretch and expand our capacity."
          products={researchProducts}
        />
        <TeamSection heading="Meet our team" teamMembers={teamMembers} />
        <ContactUsSection />
      </div>
    </>
  )
}
