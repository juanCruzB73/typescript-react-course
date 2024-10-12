import { ChangeEvent, useState } from "react"

interface FormValues{
    [key:string]:string|number
}

export const useForm = <T extends FormValues>(initialValues:T)=>{

    const [formState,setFormState]=useState<T>(initialValues)

    const onInputChange=({target}:ChangeEvent<HTMLInputElement>)=>{
        setFormState({
            ...formState,
            [`${(target.name)}`]:target.value,
        })
    }

    return{
        ...formState,formState,onInputChange,
    }

}