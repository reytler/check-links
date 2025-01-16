'use client'

import { checkDTO } from "@/pages/api/checklink"
import { Button, Form, Input } from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { FormEvent, useState } from "react"
import { LoadingPoints } from "./LoadingPoints"
import { MainProvider } from "./Providers/MainProvider"
import { enumTypeNotification, Notify } from "./Notification"

export function HomeComponent(){
  const [loading,setloading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setloading(true)
        const {link,url} = Object.fromEntries(new FormData(e.currentTarget));

        const requestBody: checkDTO = {
          url: url.toString(),
          expected: link.toString()
        }

        try {
          const response = await axios.post('/api/checklink',requestBody)
          Notify(enumTypeNotification.SUCCESS,'Resultado dos links carregados!')
          console.log(response)
        } catch (error:unknown) {
          if(error instanceof AxiosError){
            console.log(error.response?.data.message)
            Notify(enumTypeNotification.ERROR,error.response?.data.message)
          }
          setloading(false)
        } finally{
          setloading(false)
        }
    }
    
      return (
        <MainProvider >
          <div className="flex justify-center items-center gap-4 flex-col">
            <h1 className="text-3xl font-bold">Verificador de links</h1>
            <Form className="w-full max-w-xs flex gap-8 mt-8" validationBehavior="native" onSubmit={handleSubmit}>
              <Input
                isRequired
                errorMessage="Por favor insira a url da landing page"
                label="Url da landing Page"
                labelPlacement="outside"
                name="url"
                placeholder="Insira a url"
                type="text"
              />
              <Input
                isRequired
                errorMessage="Por favor insira o link de afiliado esperado"
                label="Link de afiliado"
                labelPlacement="outside"
                name="link"
                placeholder="Insira o link"
                type="text"
              />
              <Button color="primary" type="submit" disabled={loading}>{loading ? (
                <LoadingPoints/>
              ) :'Testar Links'}</Button>
            </Form>
          </div>
        </MainProvider >
      );
}