// ** Icons Import
import { PieChart, Circle, Users, User, Database } from 'react-feather'

export default [
    {
        header: 'Reservations & Categories'
    },
    {
        id: 'Reservations & Categories',
        title: 'Reservations & Categories',
        icon: <Database size={20} />,
        children: [

            {
                id: 'Reservations',
                title: 'Reservations',
                icon: <Circle size={12} />,
                navLink: '/reservations'
            }

            // {
            //     id: 'Categories',
            //     title: 'Categories',
            //     icon: <Circle size={12} />,
            //     navLink: '/categories'
            // }
        ]
    }
]
