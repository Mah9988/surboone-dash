import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
    users: [
      {
        id: 1,
        course_name: "Introduction to Programming",
        category: "Computer Science",
        number_of_videos: 20,
        status: "active"
      },
      {
        id: 2,
        course_name: "Data Science Fundamentals",
        category: "Data Science",
        number_of_videos: 15,
        status: "inactive"
      },
      {
        id: 3,
        course_name: "Web Development Basics",
        category: "Web Development",
        number_of_videos: 25,
        status: "active"
      },
      {
        id: 4,
        course_name: "Marketing Strategies",
        category: "Marketing",
        number_of_videos: 18,
        status: "active"
      },
      {
        id: 5,
        course_name: "Advanced Python Programming",
        category: "Computer Science",
        number_of_videos: 30,
        status: "active"
      },
      {
        id: 6,
        course_name: "Machine Learning Essentials",
        category: "Data Science",
        number_of_videos: 22,
        status: "inactive"
      },
      {
        id: 7,
        course_name: "Full-Stack Web Development",
        category: "Web Development",
        number_of_videos: 35,
        status: "active"
      },
      {
        id: 8,
        course_name: "Digital Marketing Strategies",
        category: "Marketing",
        number_of_videos: 20,
        status: "inactive"
      },
      {
        id: 9,
        course_name: "Algorithms and Data Structures",
        category: "Computer Science",
        number_of_videos: 28,
        status: "active"
      },
      {
        id: 10,
        course_name: "Big Data Analytics",
        category: "Data Science",
        number_of_videos: 17,
        status: "active"
      }
    ]
  
}

// GET ALL DATA
mock.onGet('/api/course/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/course/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)
  const highestValue = data.users.reduce((a, b) => (a.id > b.id ? a : b)).id

  user.id = highestValue + 1

  data.users.push(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/course/list/data').reply(config => {
  const {
    q = '',
    page = 1,
    role = null,
    perPage = 10,
    sort = 'asc',
    status = null,
    currentPlan = null,
    sortColumn = 'course_name'
  } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()

  const dataAsc = data.users.sort((a, b) => (a[sortColumn] < b[sortColumn] ? -1 : 1))

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    user =>
      (user.email.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.billing.toLowerCase().includes(queryLowered)) &&
      user.category === (category || user.category) &&
      user.course_name === (course_name || user.course_name) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      total: filteredData.length,
      users: paginateArray(filteredData, perPage, page)
    }
  ]
})

// GET USER
mock.onGet('/api/course/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/apps/course/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
