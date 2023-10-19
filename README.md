# Storage Room 
Aplicación básica para la gestión del stock en ubicaciones físicas dentro de un pequeño almacén. Creada para gestionar el almacenamiento del stock en zona de ventas en tienda Leroy Merlin. El código LM es el referenciamiento interno de Leroy Merlin pero se puede sustituir por un código interno cualquiera o eliminar y usar solo el código EAN del producto.

Se ha usado el framework Laravel usando React y Tailwind para el frontend. Consultar documentación para su instalación.

Se necesita una base de datos SQL para su funcionamiento.

## Instalación
`composer install` -> para instalar las dependencias de laravel.

`npm install` -> para instalar las dependencias js.

Es necesario copiar el archivo `.env.example` a un nuevo archivo `.env` y definir los parámetros de la base de datos en él.

`php artisan key:generate` -> para generar la clave APP_KEY de Laravel.

`php artisan migrate` -> para la creación de la base de datos

## Pruebas
Definir en el archivo `database/seeders/DatabaseSeeder.php` el usuario principal (admin) de la aplicación ya que será el usuario de inicio.

`php artisan db:seed` -> para hacer una base de datos falsa con artículos, contenedores y ubicaciones.

`php artisan serve` + `npm run dev` -> para iniciar servidor de prueba.