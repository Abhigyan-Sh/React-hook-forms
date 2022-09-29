import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    console.log(watch('passCode'))
    console.log(data)
  }
  console.log(errors)
  console.log(watch('passCode')) // console.log's with each change
  return (
    <div className="App">
      {/* <form onSubmit= {handleSubmit(onSubmit)}>
        <input
          defaultValue= 'pryansh'
          {...register('name', {required: true, maxLength: 22, pattern: /^[A-Za-z]+$/i})}
        />
        <input
          {...register('passCode', {required: true})}
        />
        <input
        type='number'
          {...register('age', {min: 18, max: 40})}
        />
        {errors.name?.type === 'required' && <p>name is required</p>}
        {errors.name?.type === 'pattern' && <p>for name only A-Z and a-z characters are allowed.</p>}
        {errors.name?.type === 'maxLength' && <p>name length surpassed 22 chars</p>}
        {errors.passCode?.type === 'required' && <p>PassCode is required</p>}
        
        {errors.age?.type === 'max' && <p>max age is 40</p>}
        {errors.age?.type === 'min' && <p>min age is 18</p>}
        <button type='submit'>submit</button>
      </form> */}
      {/* 
       */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          {...register('name')}
        />
        <input
          {...register('passCode')}
        />
        <input
        type='number'
          {...register('age')}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App