import logo from '@src/assets/images/logo/primary_logo.png'

const SpinnerFullSize = () => {
    return (
        <div className='fallback-spinner app-loader'>
            <img className='fallback-logo' src={logo} alt='logo' style={{ width: "90px" }} />
            <h2 style={{ color: '#20d885' }}>Muatasharak</h2>
            <div className='loading'>
                <div className='effect-1 effects'></div>
                <div className='effect-2 effects'></div>
                <div className='effect-3 effects'></div>
            </div>
        </div>
    )
}

export default SpinnerFullSize
