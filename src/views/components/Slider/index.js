// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import SwiperCore, { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SpinnerFullSize from '../../../@core/components/spinner/Fullsize-spinner'
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/banner-11.jpg'
import img2 from '@src/assets/images/banner/banner-12.jpg'
import img3 from '@src/assets/images/banner/banner-13.jpg'
import img4 from '@src/assets/images/banner/banner-14.jpg'
import img5 from '@src/assets/images/banner/banner-15.jpg'
import { XCircle } from 'react-feather'

SwiperCore.use([Thumbs])

const DeleteImage = ({ handleDelete }) => {

    return (
        <div
            className='remove-slider-container'
            onClick={() => { handleDelete() }}
        ><XCircle style={{ color: 'red' }} /></div>
    )
}
const SwiperGallery = ({ isRtl }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const params = {
        className: 'swiper-gallery',
        spaceBetween: 10,
        navigation: true,
        pagination: {
            clickable: true
        },
        thumbs: { swiper: thumbsSwiper }
    }

    const paramsThumbs = {
        className: 'gallery-thumbs',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        onSwiper: setThumbsSwiper
    }

    // delete image : 

    const [deleteLoading, setDeleteLoading] = useState(false)
    const handleDelete = () => {
        setDeleteLoading(true)
        console.log('sssss')
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Gallery</CardTitle>
            </CardHeader>
            {
                deleteLoading ? <SpinnerFullSize /> : <CardBody>
                    <div className='swiper-gallery'>
                        {/* <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img1} alt='swiper 1' className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img2} alt='swiper 2' className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img3} alt='swiper 3' className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img4} alt='swiper 4' className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img5} alt='swiper 5' className='img-fluid' />
                            </SwiperSlide>
                        </Swiper> */}
                        <Swiper {...paramsThumbs}>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img1} alt='swiper 1' className='img-fluid' />
                                <p style={{ color: "#fff", padding: '5px' }}>pic 1</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img2} alt='swiper 2' className='img-fluid' />
                                <p style={{ color: "#fff", padding: '5px' }}>pic 1</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img3} alt='swiper 3' className='img-fluid' />
                                <p style={{ color: "#fff", padding: '5px' }}>pic 1</p>

                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={img4} alt='swiper 4' className='img-fluid' />
                                <p style={{ color: "#fff", padding: '5px' }}>pic 1</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <DeleteImage handleDelete={handleDelete} />
                                <img src={'https://www.flintriverhospital.com/wp-content/uploads/2015/02/doctor-slider.jpg'} alt='swiper 5' className='img-fluid' />
                                <p style={{ color: "#fff", padding: '5px' }}>pic 1</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </CardBody>
            }

        </Card>
    )
}

export default SwiperGallery
