// ProductSection.tsx

import React from 'react'

interface ProductItem {
  title: string
  description: string
}

interface ProductSectionProps {
  workAreaTitle: string
  workAreaDescription: string
  products: ProductItem[]
}

const ProductSection: React.FC<ProductSectionProps> = ({
  workAreaTitle,
  workAreaDescription,
  products,
}) => {
  return (
    <div className="container mx-auto mb-40">
      <div className="flex flex-col justify-center text-center items-center mb-10">
        <div>
          <h3 className="flex text-3xl font-extrabold tracking-tight sm:text-4xl justify-center mb-6 drop-shadow-lg">
            {workAreaTitle}
          </h3>
          <p className="text-justify text-lg text-gray-500">{workAreaDescription}</p>
        </div>
        </div>
      {/* <div className="grid"> */}
        {/* Work Area Column */}
        

        {/* Products Column */}
        <div className={`md:grid ${workAreaTitle === 'Sustainability' ? 'grid-cols-1' : workAreaTitle === 'Economy' ? 'grid-cols-2' : 'grid-cols-3'} grid-cols-1 gap-20`}>
          {products.map((product, index) => (
            <div key={index} className="flex flex-col text-center mb-10 rounded-md bg-white p-8 border-t shadow-md shadow-amber-600">
              <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
              <p className="mt-2 text-base text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    // </div>
  )
}

export default ProductSection
