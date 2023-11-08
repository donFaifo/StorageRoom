import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, router } from "@inertiajs/react"

export default function Actions({ editRoute, deleteRoute }) {

  return (
    <>
      <Link href={editRoute}>
        <FontAwesomeIcon 
          icon={faEdit} 
          className="px-4"
        />
      </Link>
      <Link href={deleteRoute} method="post" as='button'>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="px-4" 
          id="delete"
        />
      </Link>
    </>
  )
}