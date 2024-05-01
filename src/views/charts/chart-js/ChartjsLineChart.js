// ** Third Party Components
import { Line } from 'react-chartjs-2'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ChartjsLineChart = ({ labelColor, gridLineColor, warningColorShade, lineChartDanger, lineChartPrimary }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      },
      y: {
        min: 0,
        max: 400,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      }
    },
    plugins: {
      legend: {
        align: 'start',
        position: 'top',
        labels: {
          boxWidth: 10,
          marginBottom: 25,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  // ** Chart Data
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'UI/UX',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartDanger,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartDanger,
        pointHoverBackgroundColor: lineChartDanger
      },
      {
        data: [80, 125, 105, 130, 215, 90, 70, 160, 230, 250, 220, 220],
        fill: false,
        tension: 0.5,
        label: 'Marketing',
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary
      },
      {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'MATH',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: warningColorShade,
        backgroundColor: warningColorShade,
        pointBorderColor: warningColorShade,
        pointHoverBackgroundColor: warningColorShade
      },
      {
        data: [0, 0, 82, 90, 115, 115, 130, 150, 160, 170, 170, 100, 100],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Logic',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: '#ff7f51',
        backgroundColor: '#ff7f51',
        pointBorderColor: '#ff7f51',
        pointHoverBackgroundColor: '#ff7f51'
      },
      {
        data: [200, 180, 170, 190, 200, 220, 250, 222, 222, 260, 280, 280],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Graphics Designer',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: '#19b962',
        backgroundColor: '#19b962',
        pointBorderColor: '#19b962',
        pointHoverBackgroundColor: '#19b962'
      }
    ]
  }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Most Populer Courses
          </CardTitle>
          {/* <CardSubtitle>Commercial networks and enterprises</CardSubtitle> */}
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '450px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
