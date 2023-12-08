
'use client'
import React from 'react';
import ImageGallery from "react-image-gallery";
import FeatImage01 from '@/public/images/TimImage.png'
const originalBase  = 'https://github.com/tnwrestler360/EvolutionWebPage/blob/master/public/images/original/'
const thumbnailBase = 'https://raw.githubusercontent.com/tnwrestler360/EvolutionWebPage/master/public/images/thumbnail/'

const images:any = []

class MyGallery extends React.Component {
  render() {
    for (let i =  1; i<28; i++){
        images.push({
          original: `${originalBase}original${i}.png?raw=true`, //option 8
          thumbnail: `${thumbnailBase}original${i}T.png?raw=true`,
        })
    }
    return <ImageGallery items={images} showPlayButton = {false}/>;
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
        <h1 className="h2 mb-4 photo-gh">Photo Gallery</h1>
            <hr></hr>
            <br />
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-400"></p>
            <MyGallery />
          </div>
        </div>
      </div>
    </section>
  )
}
