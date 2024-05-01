// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'
import wallet from '@src/assets/images/icons/card-money.png'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>All profits 🎉  </h5>
        {/* <CardText className='font-small-3'>All profits are</CardText> */}
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            $5 K
          </a>
        </h3>
        <Button color='primary'>View Reports</Button>
        <img className='congratulation-medal' src={wallet} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
