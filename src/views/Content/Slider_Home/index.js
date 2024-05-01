import React, { Fragment } from 'react'
import { Col, Input, Row } from 'reactstrap'
import FileUpload from '../../components/FileUpload/Restrictions-Input'
import SwiperGallery from '../../components/Slider'

// ** Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import SwiperCore, {
    Grid,
    Lazy,
    Virtual,
    Autoplay,
    Navigation,
    Pagination,
    EffectFade,
    EffectCube,
    EffectCoverflow
} from 'swiper'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const index = () => {
    // ** Hooks
    const [isRtl] = useRTL()


    return (
        <Fragment>
            <Row>
                <Col sm='12'>
                    <FileUpload />
                </Col>
                <Col sm='12'>
                    <SwiperGallery isRtl={isRtl} />
                </Col>
            </Row>
        </Fragment>
    )
}

export default index