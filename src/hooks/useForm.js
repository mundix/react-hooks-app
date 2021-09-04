import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setValues({
             ...values,
             [target.name] : target.value
         });
    }
    //Devolvere un arraay con los valores de setValue, y el metodo 
    return [values, handleInputChange];
}
