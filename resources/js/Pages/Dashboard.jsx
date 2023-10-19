import LayoutHeader from '@/Components/LayoutHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

function Board({location={id: 0, name: '', description: '', containers: [
    {id: 0, number: '', fill:'0'}
]}}) {

    const containersList = location.containers.map(item => {
        const handleClick = () => {
            console.log('Ir a ' + item.id);
        }

        let fillWidthStyle = {
            width: item.fill * 100 + '%'
        }

        return (
            <div key={item.id} onClick={handleClick} className='grid grid-cols-8 mt-3  rounded rouded-lg p-3 dark:hover:bg-slate-600 hover:bg-slate-100 hover:cursor-pointer'>
                <div className='col-span-2'>{item.number}</div>
                <div className='col-span-6 mr-3 border bg-gray-300 dark:bg-slate-700 border-emerald-400 dark:border-sky-600 w-full flex'>
                    <div className='h-full bg-emerald-400 dark:bg-sky-600 text-center' style={fillWidthStyle}><span className=' drop-shadow-md'>{item.fill * 100}%</span></div>
                </div>
            </div>
        )
    })

    return (
        <div className='p-3 m-2 bg-white shadow-md dark:bg-slate-700 rounded-lg'>
            <div><b>{location.name}</b> <span className='text-xs text-gray-400'>{location.description}</span></div>
            <div className='px-3 pb-3 mt-4 mb-2'>
                {containersList}
            </div>
        </div>
    )
    
}

export default function Dashboard({ auth, locationsList }) {

    const [searchField, setSearchField] = useState('');
    const handleChange = (ev) => {
        setSearchField(ev.target.value);
    }

    const handleButton = () => {
        if(searchField.length > 0) {
            router.get(route('articles.searchText', searchField));
        } else {
            console.log('cuadro de búsqueda vacío');
        };
    }

    const locations = locationsList.map(item => {
        return (
            <Board key={item.id} location={item} />
        )
    })

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<LayoutHeader title='Inicio' />}
        >
            <Head title="Inicio" />

            <div className='p-3 m-2 bg-white shadow-md dark:bg-slate-700 rounded-lg flex flex-col md:flex-row'>
                <label htmlFor="search" className='flex items-center mx-3 md:m-0'>
                    Buscar artículo:
                </label>
                <input 
                    id="search" 
                    type='text' 
                    className='m-3 dark:bg-slate-800 dark:text-gray-300 rounded-md md:grow' 
                    placeholder='lm, ean o descripción...'
                    onChange={handleChange}
                    value={searchField}></input>
                <button type='button' className='normalButton' onClick={handleButton}>BUSCAR</button>
            </div>

            <div className="grid lg:grid-cols-2">
                {locations}
            </div>
        </AuthenticatedLayout>
    );
}