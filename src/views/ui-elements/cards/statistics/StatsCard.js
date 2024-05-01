// ** Third Party Components
import classnames from 'classnames'
import { TrendingUp, User, Box, DollarSign, UserPlus, Grid, Airplay } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '2000',
      subtitle: 'Students',
      color: 'light-primary',
      icon: <User size={24} />
    },
    {
      title: '100',
      subtitle: 'Doctors',
      color: 'light-info',
      icon: <UserPlus size={24} />
    },
    {
      title: '250',
      subtitle: 'Courses',
      color: 'light-danger',
      icon: <Grid size={24} />
    },
    {
      title: '20000',
      subtitle: 'Videos',
      color: 'light-success',
      icon: <Airplay size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'>From the start of the system</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
