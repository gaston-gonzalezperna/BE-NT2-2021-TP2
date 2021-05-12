# BE-NT2-2021-2-TP2
Trabajo Practico para Nuevas Tecnologias 2 | React Native

Para este trabajo práctico, se pide a los alumnos implementar un Cronometro Pomodoro en una apliación mobile utilizando el framework React Native. El fin de este cronómetro es ayudar a las personas a utilizar la  [Técnica Pomodoro](https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro).

El dispositivo vibrará para indicar cuando tomar un descanso o volver al trabajo, basado en unos valores por defecto: veinticinco (25) minutos para trabajo, cinco (5) minutos para descanso.


## Requerimientos
- Las únicas librerias permitiras a importar serán las siguientes:
  - `expo`
  - `expo-constants`
  - `react`
  - `react-native`
  
- El cronómetro debe mostrar minutos y segundos en Texto.
- EL cronómetro debe decrementar los segundos hasta alcanzar 00:00.
- El dispositivo móvil debe vibrar cuando el cronómetro llegue a 00:00.
- Los cronómetros deben intercambiarses automáticamente entre 25 y 5 minutos.
- El cronómetro debe ser capaz de iniciar, pausar o reiniciar.

¡La interfaz gráfica depende de ustedes! Para mayor referencia: https://reactnative.dev/docs/style

### EXTRA (No requerido)
- Permitir al usuario ingresar cualquier valor para el cronómetro (ejemplo: 10 minutos para trabajo y 5 minutos para descanso, etc).


## Como empezar: 

Para empezar, recuerden que deben de tener instalado correctamente el entorno de desarrollo con *Expo*. Para mas información ver la última diapositiva de la clase [Unidad 2: React Native](https://aulavirtual.instituto.ort.edu.ar/pluginfile.php/42039/mod_folder/content/0/React%20Native/Unidad%202_%20React%20Native%20.pdf?forcedownload=1)). Necesitaran el XDE para correrlo en su PC (modo desarrollo web) y el cliente mobile (aplicacion Expo para IOS y Android), para sus dispositivos. De igual manera pueden trabajar con emuladores [Android](https://developer.android.com/studio) o [IOS](https://developer.apple.com/xcode/) si lo prefieren. 

Además se necesitará Nodejs y NPM instalado. Pueden verificar las versiones de cada uno de la siguiente manera: `nodejs --version` y `npm --version`. En caso de no tener una instalación recomiendo hacerla según su sistema operativo: [Instalación de Node](https://nodejs.org/en/download/). Recomiendo la última versión LTS de Nodejs (v12.x.x). NPM ya viene con la instalación de Node.

En sus estaciones de trabajo, procedan a realizar un [FORK](https://help.github.com/es/github/getting-started-with-github/fork-a-repo) de este repositorio y luego clonen el proyecto (el resultante del fork) `git clone <url-resultante-despues-del-fork>`. 

Depues de clonar este repositorio, es necesario instalar las dependencias del proyecto. Para eso necesitaran abrir una terminal en la carpeta del repo clonado (o naveguen mediante una terminal de comandos hasta la carpeta `cd /path/to/project`) y ejecutar: `npm install`. NPM buscara las dependencias del archivo [`package.json`](/package.json) e instalará aquellas librerías que hagan falta para ejecutar el proyecto.

Con esto, ya tendrían todo preparado para empezar a trabajar. En la misma terminal pueden ejecutar `npm start`, esto les abrirá en el navegador el XDE de Expo (web browser), con el cual tendrán la opción de correr en modo desarrollo su app en la web, en algun emulador o incluso en sus teléfonos mediante el cliente Expo (En clases ya hemos visto como ejecutar aplicaciones escaneando el Código QR).

Una vez tengan abierta la app en el dispositivo o en el emulador, intenten abrir [`App.js`](/App.js) con su editor de codigo favorito (recomiendo VS Code), y realicen alguna modificacion para empezar a trabajar. Con esto verán los cambios automáticamente en su teléfono. 

Ya en este punto, tendran todo listo para realizar este Trabajo Práctico. Para utilizar la funcionalidad de *Vibracion*, pueden ver un ejemplo que les dejé en [`/utils`](/utils). Pueden importarlo y usarlo tranquilamente en su aplicación así:

```javascript
import {vibrate} from './utils'

// Esto causa que el teléfono vibre.
vibrate()
```

Happy Codding!





