import Image from 'next/image'
import React from 'react';
import FeatImage01 from '@/public/images/TimHeadshot.png'
import FeatImage02 from '@/public/images/RonHeadshot.png'
import FeatImage03 from '@/public/images/JeffHeadshot.png'
import ReactLogo from '@/public/images/address-book-regular.svg'
import ReactLogo2 from '@/public/images/phone-solid.svg'

export const metadata = {
  title: 'Contact Us - Evolution MFG.',
  description: 'Meet the team',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Meet the team</h1>
            <p className="text-xl text-gray-400"></p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={300} height={305} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Owner</div>
                  <h3 className="h3 mb-3">Tim Netter</h3>
                  <p className="text-lg text-gray-400 mb-4">Previously, Production Manager that has helped in the design and building of equipment primarily for the semiconductor industry, but have also worked with design and building of medical and industrial equipment. I have done everything from piece parts to automated equipment. It is a great feeling to build something from start to finish and then see that your customer is satisfied with the end result.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo} width={20} height={20} alt="Features 02" />
                      <span>tnetter@evolutionmfg.co</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo2} width={20} height={20} alt="Features 02" />
                      <span>971-806-6560</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr></hr>
          <br />
          {/* 2nd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={300} height={305} alt="Features 02" />
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Sales Manager</div>
                <h3 className="h3 mb-3">Ron Davis</h3>
                <p className="text-lg text-gray-400 mb-4">A seasoned Sales Manager specializing in semiconductor sales, seamlessly integrating technical expertise with a passion for success. With a proven track record in navigating the complex landscape of semiconductor solutions, client relations, and strategic business development, John is committed to driving results and exceeding sales targets. Beyond the realm of silicon and circuits, he finds serenity by the water, casting lines and strategizing not only in the boardroom but also in the tranquility of his favorite fishing spots. A devoted follower of European football, Ron understands the precision and strategy required in the semiconductor industry, reflecting the same passion in his approach to the game. For a unique blend of semiconductor proficiency, strategic salesmanship, and shared excitement for fishing and football.</p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo} width={20} height={20} alt="Features 02" />
                    <span>rdavis@evolutionmfg.co</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo2} width={20} height={20} alt="Features 02" />
                    <span>360-949-3116</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <hr></hr>
          <br />
          {/* 3rd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={300} height={305} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Outside Sales Representative</div>
                  <h3 className="h3 mb-3">Jeff Davis</h3>
                  <p className="text-lg text-gray-400 mb-4">Greetings, I am Jeff Davis, an Outside Sales Representative who has recently relocated to the West Coast. With a background in cultivating valuable client relationships and a proficiency in identifying business opportunities, I am committed to enhancing your experience with our esteemed products and services. As I navigate the diverse markets of the West Coast, I also appreciate the scenic golf courses this region offers. Golf serves as both a pastime and a pursuit that aligns with the meticulous strategy required in sales. I invite the opportunity to connect with you—whether discussing sales strategies or engaging in a round of golf. Your consideration is greatly appreciated, and I look forward to contributing to the success of our collaborations.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo} width={20} height={20} alt="Features 02" />
                    <span>jdavis@evolutionmfg.co</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <Image className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" src={ReactLogo2} width={20} height={20} alt="Features 02" />
                    <span>717-951-5140</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}
