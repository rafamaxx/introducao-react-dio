import Item from './components/itens';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>First React Aplication</h1>
      <ul>
        <Item text='First item'/>
        <Item text='Secont Item'/>       
      </ul>
      <Card/>
    </>
  )
}

export default App;