// TeamSection.tsx

import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa' // Import social media icons

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string // Add your image path type
  linkedin?: string // Optional: Social media links
  twitter?: string
  github?: string
}

interface TeamSectionProps {
  heading: string
  teamMembers: TeamMember[]
}

const TeamSection: React.FC<TeamSectionProps> = ({ heading, teamMembers }) => {
  return (
    <section id="meet-our-team">
      <div className="container mx-auto py-12">
        <h2 className="mt-1 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {heading}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-x-28 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Team Member Image */}
              <Image
                src={member.image}
                alt={member.name}
                height="144"
                width="144"
                className="mt-4 h-36 w-36 rounded-full"
              />

              {/* Team Member Details */}
              <div className="mb-20 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-base text-gray-600">{member.role}</p>
                <p className="mt-2 text-left text-base">{member.bio}</p>
              </div>

              {/* Social Media Icons */}
              {/* <div className="flex mt-4 space-x-4">
                  {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                      </a>
                  )}
                  {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
                      </a>
                  )}
                  {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-gray-800 hover:text-black cursor-pointer" />
                      </a>
                  )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
