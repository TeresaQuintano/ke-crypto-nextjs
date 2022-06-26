### Intro

First of all, I want to thank you for the opportunity you've given me. The challenge, in a first sight doesn't seems difficult to develop by any front end developer.

But I have to begin by the beginning...

@Roberto, I want to explain my path in this challenge. Let me explain it in spanish please, it has been tough... Is
more confortable for me if I can explain in our native language.

I'm sorry in advance.


# Los pasos

## Figma Desing vs Resources vs README

Analizando en profundidad el diseño de Figma, me enuentro con que hay colores en el diseño que no están en los proporcionados en los
mapas de color. Por ejemplo: los nombres de los stocks están a #000000 y ese color no existe en el bloque de colores.

Eso me hace pensar que tengo que analizar el diseño al pixel. 

Empiezo con un mock "pixel perfect" y es en ese momento cuando me doy cuenta de que hay colors,  que no son consecuentes con el png que me habéis dado y que hay margings, paddings que no son equitativos por las partes.

Es el caso de los literales que hay debajo de los nombres de las crypto, por ejemplo LUNA que tiene un color #82838B. 

Pero no pasa nada, pienso que este tipo de discrepancias en el
diseño son habituales en el día a día en nuestro sector.

A partir de este mock, todo fue mucho más sencillo.

Leyendo el README del proyecto encuentro: "*Plus. Responsive web design techniques used and the approach used for
layout.*"

Pienso: "El diseño parece que está hecho para aplicación móvil nativa: navbar abajo, botones de app...etc y no hay más" 

Para llegar a ese plus que pediais, me he inventado un diseño responsive para: Tablet portrait, Tablet Landscape y Desktop HD
dando continuidad al estilo. Espero que os guste, y si no os gusta, espero por lo menos haber cumplido ese plus con mi
propuesta ;)


## Ke Crypto

Bajo mi punto de vista, todos los desarrollos que tengan parte frontend tienen que tener marca. 

Son visuales. 

Con marca me refiero a algo que relacione el contenido con un nombre, pues así es más fácil identificar. 

Basándome en que es una aplicacion de cripto-monedas y que os llamáis kelisto, he creado la marca **kecrypto**. Por eso se llama así el proyecto. 

Para que la marca tuviera consistencia, he diseñado un logo siguiendo vuestra línea de diseño (me costó mucho encontrar el logo de kelisto en svg...) y a partir de él, he creado los favicon correspondientes para poder incluirlos en la app.


## Lenguaje: la decisión

Sabiendo que os encajaba React js, y que por mi parte tengo conocimientos suficientes para montar el dashboard, me decanto
por la opción de Reactjs.

Y llega el primer escollo...

Llevo desarrollando en angular desde hace 4 semanas y tengo la cabeza orientada a interfaces y observables. Eso me plantea parar y empezar de nuevo con React ts... 

Después de analizarlo mucho, pienso que 'me va a facilitar más la vida'
Reactjs.


## Sass, siempre Sass

Los estilos están desarrollados en Sass. Con sus variables, sus mixins, sus functions...etc

No lo he hecho con modules porque no comparto la idea de 'modularizar'. 

Es el debate de siempre, si se maqueta con Bem, cargar un css optimizado es más óptimo y reutilizable que hacer modules por componentes. 

Reactjs no es como Angular, no existe el shadow dom. (O yo no se que existe...)


## Componentes y Escalabilidad

Llega el momento de análisis en profundidad de la escalabilidad de la aplicación:

- ¿Esta prueba de concepto es real?
- ¿A futuro el nombre del usuario irá acompañado de avatar?
- ¿El icono de la campana qué representa? ¿un botón que al clicar hace que a parezca un popup con un pequeño resumen de las notificaciones y un enlace para ir a la página listado de notificaciones? 
Cuando el usuario tenga notificaciones ¿se le mostrará el número de notificaciones nuevas?
- ¿El saldo de posición global hay que mostrarlo en alguna otra pantalla?

Bajo estas preguntas, tomo la decisión de hacer los siguientes componentes:

**components**:
- **Dashboard::**
- GlobalPosition.js
- StockList.js
- StockListItem.js
- **shared:**
- Alert.js
- Button.js
- Header.js
- Layout.js
- LoadingSpinner.js
- Navigation.js
- Profile.js

**A destacar:**

- **Layout.js:**
  Para poder dar distintas estructuras a las vistas y reutilizar los componentes comunes: header, footer.

- **LoadingSpinner.js:**
  Para poder sacar un loading en las llamadas a la api y en la carga de la página


Con respecto al árbol y estructura de carpetas, soy novata en arquitectura Reactjs, pero pienso que se entiende
perfectamente.

**Escalabilidad de componentes:**

- **Alert.js:**
  El componente Alert puede recibir por props "amount" como número de notificaciones a mostrar.
  Podéis probarlo con:
  
  <Alert icon="bell" amount={'5'}/>
  


- **Profile.js:**
  El componente Profile puede recibir por props "avatar" como imagen de avatar del usuario
  Podéis probarlo con:
  
  <Profile userName="Anakin" avatar={'https://i.pravatar.cc/150?img=6'}/>
  


## Páginas / Vistas / Como queráis que lo llamemos

En el Challenge solo hay que pintar una vista: el dashboard. 

Hasta aquí no digo nada nuevo, pero ¿quedaría bien mostrar
una navegación y que no funcionara? Debido a este punto, he creado las siguientes páginas:

**pages:**

- card
- dashboard
- notifications
- refresh
- settings

Las he llamado así porque así se llamaban los iconos.

**A destacar:**
He añadido la página de notificaciones porque doy por hecho de que si el usurio puede recibir notificaciones, podrá navegar a la ruta para verlas.

## ¿fetch a un json?

Entiendo que cuando estamos desarrollando y el back aún no tiene los servicios, 'mockeemos' en un json la response (previo acuerdo de gobierno) para no parar el desarrollo de front.

Pero ¿y si creamos el back? 

Tan sencillo como generar una rutas con express.js para que nos devuelva las llamadas.

Eso es lo que en un primer momento hice, y digo en un primer momento porque gracias al Big Data me apareció un
tutorial...

## ¡EL TUTORIAL!

Llegados a este punto, podía haberos enviado el repo. 

Yo estaba satisfecha con lo desarrollado: un nodejs que sirve al
front, los componentes, el bem , la marca, los tests hasta donde llego...etc

Pero me llega un tutorial de Nextjs y recuerdo que @roberto me comentastó que vosotros desarrollábais sobre Nextjs (o me
quedé con eso)

Y llega el momento en el que me dispongo a migrar todo el código de Reactjs a Nextjs.

### Lectura de la migración

1- Migrar los componentes es bastante sencillo, Next tiene una documentación muy buena y accesible.

2- **Migrar el Sass también lo es...** 

Bueno, no es cierto. Empecé haciendo modules sass y aplicando los 
<code>{styles}</code> pero me parecía que enguarraba mucho el componente cuando tiene ternariso o incluso dos clases ya que se pasan como array,
Al no haber encontrado documentación suficiente de cómo pasar los ternarios en <code>classNames={styles.miComponente}</code>. Lo he dejado de manera global.

3- **El Router... ¡Ay el router!**

En el repo de React yo tenía esta App function:
```jsx
function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(()=>{
    window.addEventListener('load',handleLoading);
    return () => window.removeEventListener('load',handleLoading);
  },[])

  return (
    !isLoading ? (
      <SessionProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path={DASHBOARD} element={<Dashboard/>}/>
              <Route path={REFRESH} element={<PageToDo pageTitle='Refresh'/> }/>
              <Route path={CARD} element={<PageToDo pageTitle='Card'/> }/>
              <Route path={SETTINGS} element={<PageToDo pageTitle='Settings'/> }/>
              <Route path={NOTIFICATIONS} element={<PageToDo pageTitle='Notifications'/> }/>
              <Route path={DEFAULT} element={<Navigate to={DASHBOARD}/>}/>
            </Routes>
          </Layout>
        </Router>
      </SessionProvider>
    ):(<LoadingSpinner/>)
  );
}

export default App;


```

Cargaba un loading
De manera que por <code>{props}</code> las páginas que no eran Dashboard llamaban a un componente PageToDo y recogían el título, evitando así la generación de nuevas páginas que simplemente están para la navegación, pero hay que desarrollar a futuro.

La app iba envuelta de esta manera:
```jsx
<SessionProvider>
  <Router>
    <Layout>
      <Routes>
```


Peo en Next, al ir las rutas en función del orden que tenga el de directorio de pages, he tenido que crear las vistas para la navegación porque no he dado con la manera de pasarle por <code>
{props}</code>. el titulo como tenía en react. Seguro que se puede hacer pero no he dado con ello en el tiempo que tenía.

En Next la app queda envuelta así: 
```jsx
function MyApp({Component, pageProps}) {
  const [totalAmount, setTotalAmount] = useState();
  const [hasError, setHasError] = useState(false);

  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(
      <AppProvider
          value={{
            state: {
              totalAmount: totalAmount,

              hasError: hasError,
            },
            setTotalAmount: setTotalAmount,
            setHasError: setHasError,
          }}
      >
        <Component {...pageProps} />
      </AppProvider>)
}
```

Donde getLayout decora el layout de cada vista antes de pasar el contexto
```jsx
// Enlas vistas que tiran de layout
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
```

4 - **Los test: me quito el miedo** 

Complicados ambos, pero me han reportado mucho aprendizaje y sobre todo me han quitado el miedo. Lo vemos ahora. 



## Test: Jest + React.js 18

No tengo mucha experiencia en desarrollar test, te lo comentaba el otro día @roberto, pero os quiero agradecer esta oportunidad porque he aprendido muchísimo.

Los test, han sido sin lugar a duda lo que más me ha costado desarrollar. Lo que más tiempo me ha llevado, estimo que un 40%-50% del total


Aún así en el repo de React llego a
<code>
All files                 |   64.78 |    45.83 |   60.71 |   63.76 |
</code>

Pero en el de next:
<code>
All files             |   56.06 |       50 |   45.16 |   56.92 |     
</code>

La parte más complicada ha sido la documentación de react 18 con el método create porque ya no se puede usar.

Por esta razón, me ha costado mucho poder renderizar cualquier componente aú siendo 'tonto'. 

Cuando he dado con la solución y para poder reutilizarlo he añadido unos métodos en **test/test-utils.js** donde se exporta la creación de los componentes según React 18. 

````jsx
import ReactDOM from 'react-dom/client';
let container;

export const createContainerDom = () => {
  container = document.createElement('div');
  document.body.appendChild(container);
}

export const createContainer= (component) => {
  return  ReactDOM.createRoot(container).render(component);
}
````

En ese archivo de utils, hay otros métodos sacados de Stackoverflow que los he dejado porque quiero probarlos a futuro...


En next, he probado de mil maneras mockear el provider para los test de las páginas pero como además llevaba el Layout he tenido mucha dificultad, de hecho no he podido sacarlo.

Lo seguiré intentando porque honestamente, tengo clavada la espinita.

Aún con todos los impedimentos y el tiempo que disponía para hacer el challenge, he llegado al 64.78 en React y al 56.06. en Next.
Se que no llega al 80%, pero yo estoy muy contenta. ¡Pero mucho!



## Los repos:

Por si queréis echar un ojo al repo de react + nodejs (fetaure/ke-crypto) os dejo el enlace:
https://github.com/TeresaQuintano/kelisto-frontend-js-challenge-crypto/tree/fetaure/ke-crypto

Os envío este repo porque creo que Next es un plus. Y creo que haber hecho el upgrade con éxito es suficiente razón para compartirlo.

Supongo que hay cosas que mejorar pero para ser mi primer Next estoy contenta.



# The End:

Muchas gracias nuevamente por darme esta oportunidad. Espero feedback tanto positivo como constructivo del trabajo realizado. Sed benevolentes!!!

Un abrazo!

Teresa Quintano
