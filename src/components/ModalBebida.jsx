import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas()

    //console.log(receta)

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++){
            if(receta[`strIngredient${i}`]){
                //Push no se recomienda en state, pero en este caso no estamos haciendo uso de un state
                ingredientes.push(
                    <li key={i}>{receta[`strIngredient${i}`]} : {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes
    }

    /* 
        Esta es una solucion a que la imagen de la bebida anterior que fue consultada no aparezca al momento de consultar otra
        <Modal show={modal} onHide={() => {
            handleModalClick()
            setReceta({})
        }}></Modal>
    */

  return (
    !cargando && 
    (<Modal show={modal} onHide={handleModalClick}>
        <Image 
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`}
        />
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y cantidades:</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>
    )
  )
}

export default ModalBebida
