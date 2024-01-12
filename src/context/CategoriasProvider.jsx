import { useState, useEffect, createContext } from "react"
import axios from "axios"

const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {
    //State para almacenar las diferentes categorias de la api
    const [categorias, setCategorias] = useState([])

    //Funcion asincrona para obtener las categorias desde la api
    const obtenerCategorias = async () => {
        //Bloque try-catch para lanzar un error en caso de que la consulta no se efectue correctamente
        try{
            //Variable con la url
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            //Extraemos los datos de la url con axios
            const { data } = await axios(url)

            //modificamos el state y guardamos en el las categorias obtenidas
            setCategorias(data.drinks)

        }catch(error){
            console.log(error)
        }
    }

    
    useEffect(() => {
        obtenerCategorias()
    }, [])

  return (
    <CategoriasContext.Provider
        value={{
            categorias
        }}
    >
        {children}
    </CategoriasContext.Provider>
  )
}

export {
    CategoriasProvider
}

export default CategoriasContext
