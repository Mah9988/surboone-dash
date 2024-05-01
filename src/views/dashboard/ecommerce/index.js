// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
import CompanyTable from './CompanyTable'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import LineChart from '@src/views/charts/chart-js/ChartjsLineChart.js'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import ApexLineChart from '../../charts/apex/ApexLineChart'
import ApexBarChart from '../../charts/apex/ApexBarChart'
import SimplePieChart from '../../charts/recharts/PieChart'
import Recharts from '../../charts/recharts'
const auth = 1
const EcommerceDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** vars
  const trackBgColor = '#e9ecef'

  const donut = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  }

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        {/* <Col lg='6' md='12'>
        </Col> */}
        <Col lg='6' md='12'>
          <ApexLineChart direction={'ltr'} warning={colors.warning.main}/>
          {/* <CardTransactions title={'Last 7 New Doctors'} /> */}
        </Col>
        <Col lg='6' md='12'>
          <ApexBarChart direction={'ltr'} info={colors.info.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col sm='8'>
          <LineChart
            labelColor={'#6e6b7b'}
            gridLineColor={'rgba(200, 200, 200, 0.2)'}
            lineChartDanger={'#ff4961'}
            lineChartPrimary={'#666ee8'}
            warningColorShade={'#ffbd1f'}
          />
        </Col>
        <Col sm='4'>
     <SimplePieChart series1={donut.series1} series2={donut.series2} series3={donut.series3} series5={donut.series5} />
        </Col>
        {/* <Recharts/> */}
      </Row>
    </div>
  )
}

export default EcommerceDashboard
