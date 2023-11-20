import spinner from './Skateboarding.gif'

const Loading = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt="Loading" />
      <h1>Fetch Data</h1>
    </div>
  )
}

export default Loading