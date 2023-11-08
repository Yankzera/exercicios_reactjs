import './App.css'
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'

function App() {
  return (
      <div className='App'>
        <h1>Avançando no React</h1>
        {/*imagem em public*/}
        <div>
          <img src='/img1.jpg' alt='Paisagem' />
        </div>
        {/*imagem em assets*/}
        <div>
          <img src={City} alt='City' />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender  />
        <ShowUserName />
      </div>
  )
}
export default App
