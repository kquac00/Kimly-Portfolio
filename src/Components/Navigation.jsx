import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Carousel.css'
import { images } from '../static/CarouselData';



const Navigation = () => {
    const [currImg, setCurrImg] = useState(0);


    return (

        <div className="carousel">
            <div className='carouselInner' style={{ backgroundImage: `url(${images[currImg].img})` }}>

                <div className='left' onClick={() => setCurrImg((currImg - 1 + images.length) % images.length)}>
                    <ArrowBackIosIcon style={{ fontSize: 50 }} />
                </div>
                <div className='center'>

                    <h1>{images[currImg].title}</h1>

                </div>
                <div className='right' onClick={() => setCurrImg((currImg + 1) % images.length)}>
                    <ArrowForwardIosIcon style={{ fontSize: 50 }} />
                </div>
            </div>
        </div>

    )
}

export default Navigation