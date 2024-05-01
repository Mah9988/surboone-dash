// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../../Customer/store'
import { useDispatch } from 'react-redux'

const defaultValues = {
  email: '',
  phone_number: '',
  password: '',
  confPassword: '',
  fullName: '',
  username: '',
  role: null
}

const countryOptions = [{ label: 'Super Admin', value: '1' }]

const checkIsValid = data => {
  return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [data, setData] = useState(null)
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = data => {
    setData(data)
    console.log("sssss")
    console.log('data :>> ', data)
    if (data.confPassword !== data.password) {
      console.log("bssss")
    }
    if (checkIsValid(data)) {
      // toggleSidebar()
      // dispatch(
      //   addUser({
      //     role,
      //     avatar: '',
      //     status: 'active',
      //     email: data.email,
      //     currentPlan: plan,
      //     billing: 'auto debit',
      //     company: data.company,
      //     contact: data.contact,
      //     fullName: data.fullName,
      //     username: data.username,
      //     country: data.country.value
      //   })
      // )
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('role', {
            type: 'manual'
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    setRole('subscriber')
    setPlan('basic')
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <Label className='form-label' for='fullName'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => (
              <Input id='fullName' placeholder='John Doe' invalid={errors.fullName && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='username'>
            Username <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='username'
            control={control}
            render={({ field }) => (
              <Input id='username' placeholder='username' invalid={errors.username && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='userEmail'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                type='email'
                id='userEmail'
                placeholder='john.doe@example.com'
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='phone_number'>
            Phone Number <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='phone_number'
            control={control}
            render={({ field }) => (
              <Input id='phone_number' placeholder='(397) 294-5153' invalid={errors.phone_number && true} {...field} />
            )}
          />
        </div>
        {/* <div className='mb-1'>
          <Label className='form-label' for='company'>
            Company <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='company'
            control={control}
            render={({ field }) => (
              <Input id='company' placeholder='Company Pvt Ltd' invalid={errors.company && true} {...field} />
            )}
          />
        </div> */}
        <div className='mb-1'>
          <div className='d-flex justify-content-between'>
            <Label className='form-label' for='login-password'>
              Password
            </Label>

          </div>
          <Controller
            id='password'
            name='password'
            control={control}
            render={({ field }) => (
              <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <div className='d-flex justify-content-between'>
            <Label className='form-label' for='conf-password'>
              Confirm Passowrd
            </Label>

          </div>
          <Controller
            id='confPassword'
            name='confPassword'
            control={control}
            render={({ field }) => (
              <InputPasswordToggle className='input-group-merge' invalid={errors.confPassword && true} {...field} />
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='role'>
            User Role <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='role'
            control={control}
            render={({ field }) => (
              // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                className={classnames('react-select', { 'is-invalid': data !== null && data.role === null })}
                {...field}
              />
            )}
          />
        </div>
        {/* <div className='mb-1'>
          <Label className='form-label' for='user-role'>
            User Role
          </Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option>
            <option value='admin'>Admin</option>
          </Input>
        </div>
        <div className='mb-1' value={plan} onChange={e => setPlan(e.target.value)}>
          <Label className='form-label' for='select-plan'>
            Select Plan
          </Label>
          <Input type='select' id='select-plan' name='select-plan'>
            <option value='basic'>Basic</option>
            <option value='enterprise'>Enterprise</option>
            <option value='company'>Company</option>
            <option value='team'>Team</option>
          </Input>
        </div> */}
        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
