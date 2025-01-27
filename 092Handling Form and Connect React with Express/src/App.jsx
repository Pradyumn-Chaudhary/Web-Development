import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        setError,
    } = useForm()
    
    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout((d) => {
                resolve();
            }, d*1000);
        })
    }
    
    const onSubmit = async (data) => {
        // await delay(2);
        let r = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({data}),
          });          
        let res = await r.json();
        console.log(data)
        // if (data.userName !== "Anu") {
        //     setError("myform", {message:"Invalid Username"});
        // } else if (!data.password.includes("$")) {
        //     setError("myform", { message: `Password must contain "$"` });
        // }
    } 

    
  return (
      <>
          {isSubmitting && <div className="loader"></div>}
       <div className='container'>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("userName", { required:{value:true,message:"This field is required"} ,minLength:{value:3,message:"Minimum length should be 3"},maxLength:{value:14,message:"Maximum length can be 14"}})} placeholder='Username' />
              {errors.userName && <span className='red'>{errors.userName.message}</span>}
              <br />
              <input type="password"  {...register("password", { required:{value:true,message:"This field is required"}, minLength:{value:8,message:"Minimum length should be 8"}})} placeholder='Password' />
              {errors.password && <span className='red'>{errors.password.message }</span>}
              <br />
                  <input disabled={isSubmitting} type="submit" {...register("submit")} placeholder='Submit' />
                  {errors.myform && <span className='red'>{errors.myform.message }</span>}
      </form>
          </div>
      </>
  )
}

export default App
