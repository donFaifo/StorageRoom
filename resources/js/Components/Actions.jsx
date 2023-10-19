import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@inertiajs/react"

export default function Actions({ id }) {

  return (
    <>
      <Link href="#">
        <FontAwesomeIcon 
          icon={faEdit} 
          className="px-4"
          onClick={() => console.log('Editar ' + id)}
        />
      </Link>
      <Link href="#">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="px-4" 
          onClick={() => console.log('Eliminar ' + id)}
        />
      </Link>
    </>
  )
}