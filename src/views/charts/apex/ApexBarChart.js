// ** Third Party Components
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexBarChart = ({ info, direction }) => {
  // ** Chart Options
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        borderRadius: [10]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: info,
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: [700, 350, 480, 600, 210, 550, 150, 300, 200, 600, 800, 900]
    }
  ]


  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardSubtitle className='text-muted mb-25'>Users Registers</CardSubtitle>
          <CardTitle className='fw-bolder' tag='h4'>
            2000
          </CardTitle>
        </div>
        <div className='d-flex align-items-center mt-md-0 mt-1'>
          {/* <Calendar size={17} /> */}
          <CardSubtitle className='text-muted mb-25'>{`From 01/01/2024 to 30/01/2024`}</CardSubtitle>
          {/* <Flatpickr
            className='form-control flat-picker bg-transparent border-0 shadow-none'
            options={{
              mode: 'range',
              // eslint-disable-next-line no-mixed-operators
              defaultDate: [new Date(), new Date(new Date().getTime() + 351 * 24 * 60 * 60 * 1000)]
            }}
          /> */}
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='bar' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexBarChart
