import Reac from "react"
import { useState } from "react"

export default function App() {
  
// ПРИМЕР С МАССИВОМ
  const [items, setItems] = useState([]);
  const addItem = () => {
  const randomId = Math.floor(Math.random() * 1000)
    const newItem = { id: randomId, value: `Item ${randomId}` }
    setItems([...items, newItem])
  }

// ПРИМЕР С ОБЪЕКТОМ
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: 0,
    email: ''
  })

  const updateName = (name) => {
    setUserInfo(prevState => ({ ...prevState, name }));
  }
  const updateAge = (age) => {
    setUserInfo(prevState => ({ ...prevState, age }));
  }
  const updateEmail = (email) => {
    setUserInfo(prevState => ({ ...prevState, email }));
  }

  return (
    <>
      <div style={{display: 'flex', gap: '100px', alignItems: 'center', margin: '50px auto', justifyContent: 'center'}}>
        
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{width: '600px', hight: '50px', backgroundColor: '#b781f3', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', color: 'white', textAlign: 'center'}}><h1>Пример с массивом</h1></div>
          <div style={{width: '600px', hight: '1200px', backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: "1px solid #b781f3"}}>

            <button style={{backgroundColor: "#b781f3", border: "none", width: "120px", borderRadius: "10px", color: "white", fontSize: "24px", display: "flex", margin: "20px auto"}} onClick={addItem}>CLICK</button>
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.value}</li>
              ))}
            </ul>

          </div>
        </div>
          
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{width: '600px', hight: '50px', backgroundColor: '#b781f3', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', color: 'white', textAlign: 'center'}}><h1>Пример с объектом</h1></div>
          <div style={{minWidt: '600px', minHight: '1200px', backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: "1px solid #b781f3"}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px', margin: '58px', fontSize: '14px'}}>
              
              <h2>Пользовательская информация:</h2>
              <p>Имя: {userInfo.name}</p>
              <p>Возраст: {userInfo.age}</p>
              <p>Email: {userInfo.email}</p>
              <input style={{border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '16px', color: '#222', marginRight: '30px'}} type="text" placeholder="Имя" onChange={(e) => updateName(e.target.value)} />
              <input style={{border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '16px', color: '#222', marginRight: '30px'}} type="number" placeholder="Возраст" onChange={(e) => updateAge(parseInt(e.target.value))} />
              <input style={{border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '16px', color: '#222', marginRight: '30px'}} type="email" placeholder="Email" onChange={(e) => updateEmail(e.target.value)} />
            
            </div>
          </div>
        </div>

      </div>
    </>
  )
}