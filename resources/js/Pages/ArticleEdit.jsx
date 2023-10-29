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


export default function ArticleEdit({ auth, article = {
  lm: '',
  ean: '',
  description: '',
  created_at: '',
  updated_at: ''
}, id=''}) {

  const [stateLm, setStateLm] = useState(article.lm);
  const [stateEan, setStateEan] = useState(article.ean);
  const [stateDescription, setStateDescription] = useState(article.description);
  
  const handleLmInput = (e) => {
    setStateLm(e.target.value);
  }

  const handleEanInput = (e) => {
    setStateEan(e.target.value);
  }
  
  const handleDescriptionInput = (e) => {
    setStateDescription(e.target.value);
  }
  
  const title = article.created_at == '' ? 'Crear artículo nuevo' : 'Editar artículo';

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
      lm: stateLm,
      ean: stateEan,
      description: stateDescription
    };
    
    router.post(route('article.store'), obj);    
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
            <InputLabel htmlFor='lm' className='self-center md:pr-4'>LM:</InputLabel>
            <TextInput type='number' id='lm' className="md:col-span-5 col-span-3" value={stateLm} onChange={handleLmInput}/>
          </div>

          <div className='grid grid-cols-4 md:grid-cols-6 md:col-start-3 md:col-span-5'>
            <InputLabel htmlFor='ean' className='self-center md:pr-4'>EAN:</InputLabel>
            <TextInput type='number' id='ean' className="md:col-span-5 col-span-3" value={stateEan} onChange={handleEanInput}/>
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