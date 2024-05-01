// ** Icons Import
import { PieChart, Circle, Users, UserPlus } from 'react-feather'

export default [
    {
        header: 'Doctors'
    },
    {
        id: 'Doctor2',
        title: 'Doctors',
        icon: <UserPlus size={20} />,
        children: [
            {
                id: 'List Doctors',
                title: 'List Doctors',
                icon: <Circle size={12} />,
                navLink: '/users/doctors'
            }
        ]
    }
]
