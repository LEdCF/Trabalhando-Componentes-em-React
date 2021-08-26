import Item from './componentes/Item/';
import Card from './componentes/Card';
const App = () => {
  return(
    <>
      <h1 align= "center">Minha primeira aplicação em React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
        </ul>
        <Card/>
    </>
  )
}

export default App;