import React from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  heading: string
  subheading: string
  description: string
  imageUrl: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex items-center justify-center text-white">
      {/* Left Column */}
      <div className="flex-1 p-8">
        <h1 className="block text-2xl text-gray-600 sm:text-3xl md:text-3xl">{heading}</h1>
        <h2 className="block text-4xl text-yellow-600 sm:text-5xl md:text-5xl">{subheading}</h2>
        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          {description}
        </p>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt="Auroville galaxy master plan"
          className="h-full w-full object-cover"
          width="500"
          height="500"
        />
      </div>
    </div>
  )
}

export default HeroSection
