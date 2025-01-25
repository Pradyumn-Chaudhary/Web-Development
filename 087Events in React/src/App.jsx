import { useState } from 'react'

function App() {
  const[color,setColor] = useState("#1a1a1a")
  // const [name, setName] = useState("Harry");
  const [form, setForm] = useState({ email: "" , phone: "" })
  const handleClick = () => {
    alert("Hey! I am clicked");
  }
  const handleMouseOver = () => {
    setColor("red");
  }
  const handleMouseLeave = () => {
    setColor("#1a1a1a");
  }
  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({...form, [e.target.name]: e.target.value,});
  }
  return (
    <>
      <div className="button" style={{display:"flex", flexDirection:"column", gap:"3px"}}>
        <button onClick={handleClick}>Click me</button>
        <button style={{backgroundColor:color}} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Hover me</button>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"3px"}}>
      {/* <input type="text" value={name} onChange={handleChange}/> */}
      <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='Email'/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange} placeholder='Phone'/>

      </div>
    </>
  )
}

export default App
