import { useForm } from "../hooks/useForm"

interface InitialValue{
    inputField:string;
}

export const InputsFields = () => {

    const{inputField,onInputChange,formState}=useForm({
        inputField:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formState);
      };

  return (
    <form className="inputForm" onSubmit={handleSubmit} >
        <input name="inputField" value={inputField} onChange={onInputChange} type="text" className="inputFild"/>
        <button type="submit" className="inputButton">submit</button>
    </form>
  )
}
