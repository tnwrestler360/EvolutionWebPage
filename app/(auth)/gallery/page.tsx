
'use client'
import React from 'react';
import ImageGallery from "react-image-gallery";
import FeatImage01 from '@/public/images/TimImage.png'


// const images = [
//     {
//       original: 'https://imgur.com/knjQL93.png',
//       thumbnail: "https://i.imgur.com/lhNlmUV.png",
//     },
//     {
//       original: 'https://i.imgur.com/nOzHgpx.png',
//       thumbnail: "https://i.imgur.com/nIvTA7l.png",
//     },
//     {
//       original: 'https://i.imgur.com/wtsjFlC.png',
//       thumbnail: "https://i.imgur.com/YSda0LN.png",
//     },
//     {
//       original: 'https://i.imgur.com/HoPhlew.png',
//       thumbnail: "https://i.imgur.com/Al7t797.png",
//     },
//     {
//       original: 'https://i.imgur.com/5DbkbN1.png',
//       thumbnail: "https://i.imgur.com/HHmhzs3.png",
//     },
//     {
//       original: 'https://i.imgur.com/lGE2up3.png',
//       thumbnail: "https://i.imgur.com/8K6MLNn.png",
//     },
//     {
//       original: 'https://i.imgur.com/7Tdph6v.png',
//       thumbnail: "https://i.imgur.com/Ty0lBVd.png",
//     },
//     {
//       original: 'https://i.imgur.com/7Tdph6v.png', //option 8
//       thumbnail: "https://i.imgur.com/Ty0lBVd.png",
//     },
// ]

const originalBase  = 'https://github.com/tnwrestler360/EvolutionWebPage/blob/master/public/images/original/'
const thumbnailBase = 'https://raw.githubusercontent.com/tnwrestler360/EvolutionWebPage/master/public/images/thumbnail/'
const images:any = []


// import Link from 'next/link'
// class MyGallery extends React.Component {
//   render() {
//     for (var i =  0; i<27; i++)
//     return <ImageGallery items={images} />;
//   }
// }

class MyGallery extends React.Component {
  render() {
    for (let i =  1; i<28; i++){
        images.push({
          original: `${originalBase}original${i}.png?raw=true`, //option 8
          thumbnail: `${thumbnailBase}original${i}T.png?raw=true`,
        })
    }
    return <ImageGallery items={images} />;
  }
}



const metadata = {
  title: 'Image Gallery - Evolution MFG.',
  description: 'View some of our work',
}

export default function Gallery() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-400"></p>
            <MyGallery />
          </div>
        </div>
      </div>
    </section>
  )
}
