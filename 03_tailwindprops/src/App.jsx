
import './App.css'
import Card from './components/card'
function App() {

  // let myObj = {
  //   username: "Monu",
  //   age: 21
  // }

  // let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Monu" btnText="Click Me" />
      <Card username="Chai" btnText="Visit Me" />
      <Card />
    </>
  )
}

export default App
