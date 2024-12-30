
Crear el usuario
Git confit –global user.name “cdeorta”

Ver el usuario
Git  config user.name
Deorta

Crear el mail
Git config –global user.email cdeorta@gmail.com
Ver el mail
Git config user.email
cdeorta@gmail.com

limpiar la pantalla
clean o cls

ver carpetas 
dir
entrar a una carpeta
cd nombre carpeta
crear carpeta
mkdir

abrimos en visual studio la carpeta nueva

inicializar 
git init


cuando un archivo aparece e n “U” es sin seguimiento
y cuando ejecutamos el comando git add nombrearchivo
agrega ese archivo y aparece con la letra “A”

Para agregar todos los archivos
git add . 

comitiar
git commit -m “primer mensaje”
si modifico un archivo me va a aparecer con “M”
hay tengo que hacer un git add . y otro commit  para que subir a git ese cambio nuevo

tenemos que ser consiso y directo 


" tengo que ver si tengo repositorio remoto "
git remote -v
si tiro el comando anterior y no me dice nada 
es que no tengo nada conectado

me creo e git hub 
priemro me paro en la rama y la elijo como principal
git branch -M main
despues agrego el remoto
git remote add origin https://github.com/cdeorta-dev/cursogit.git



par ver las ramas le pongo git branch

subir 
git push  -u origin main 


vamos iniciar un proyecto node 
npm init

me va a pedir datos de configuracion de datos de administrador de paquete

respondemos todo 
nombre del paquete le ponemos el mismo que el nombre del proyecto
asi no nos volmemos locos

version eso vamos viendo

descriptcion opcional
punto de acceso a la aplicacion de que archivo a a ejecutarce el proyecto

test comando el comando test 
git repository le mandamos la url de github

keywords no ponemos nada
author nuestro nombre
licencia la que queramos 
ylisto
ya tenemos toda la configuracion de npm


instalamos la librerias necesaria para nuestro proyecto
npm install express
(expressjs.com)

creamos el servidor de prueba

luego si anda todo bien no queresmos subri a github entonces creamos en la raiz del proyecto el archivo .gitignore

y adentro de gitignore pongo todo lo que quiero ignorar
 
 y la inversa es .gitkeep

 creamos una nueva rama navida con git branch navidad
 git checkout me cambia de rama donde estoy parado 

