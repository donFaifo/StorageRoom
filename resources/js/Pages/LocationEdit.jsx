import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';


export default function ArticleEdit({ auth, location = {
  name: '',
  description: '',
  created_at: '',
  updated_at: ''
}, id=''}) {

  const [stateName, setStateName] = useState(location.name);
  const [stateDescription, setStateDescription] = useState(location.description);
  
  const handleNameInput = (e) => {
    setStateName(e.target.value);
  }
  
  const handleDescriptionInput = (e) => {
    setStateDescription(e.target.value);
  }
  
  const title = location.created_at == '' ? 'Crear nueva ubicación' : 'Editar ubicación';

  const TitleHeader = () => {
    return(
      <header className='flex dark:text-gray-300'>
        <LayoutHeader title={title} className='flex-grow'/>
        <FontAwesomeIcon icon={faEdit} />
      </header>
    )
  }

  function handleSubmit(e) {

    e.preventDefault();

    const obj = {
      id: id,
      name: stateName,
      description: stateDescription
    };
    
    router.post(route('location.store'), obj); 
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<TitleHeader />}
    >
      <Head title={title} />

      <form className='flex flex-col gap-4 px-3 pt-3'>
        <div className='flex flex-col md:grid gap-4 md:grid-cols-9'>

          <div className='grid grid-cols-4 md:grid-cols-6 md:col-start-3 md:col-span-5'>
            <InputLabel htmlFor='name' className='self-center md:pr-4'>Nombre:</InputLabel>
            <TextInput type='text' id='name' className="md:col-span-5 col-span-3" value={stateName} onChange={handleNameInput}/>
          </div>

          <div className='grid grid-cols-4 md:grid-cols-6 md:col-start-3 md:col-span-5'>
            <InputLabel htmlFor='description' className='self-center md:pb-0 pr-4'>Descripción:</InputLabel>
            <TextInput type='text' id='description' className="col-span-3 md:col-span-5" value={stateDescription} onChange={handleDescriptionInput}/>
          </div>

          <div className='md:col-start-3 md:col-span-5 justify-self-end self-center'>
            <PrimaryButton className='flex-basis' onClick={handleSubmit}>Guardar</PrimaryButton>
          </div>

        </div>
      </form>
    </AuthenticatedLayout>
  )
}