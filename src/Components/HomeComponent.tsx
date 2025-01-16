'use client'

import { checkDTO } from "@/pages/api/checklink"
import axios, { AxiosError } from "axios"

export function HomeComponent(){

    const requestBody: checkDTO = {
      url:'',
      expected:''
    }
    const handleSubmit = async ()=>{
        try {
          const response = await axios.post('/api/checklink',requestBody)
          console.log(response)
        } catch (error:unknown) {
          if(error instanceof AxiosError){
            console.log(error.response?.data.message)
          }
        }
      }
    
      return (
        <div>
          <h1>Verificador de links</h1>
          <button onClick={()=>handleSubmit()}>Teste</button>
        </div>
      );
}