### Intro

First of all, I want to thank you for the opportunity you've given me. The challenge, in a first sight doesn't seems
difficult to develop by any front end developer.
But I have to begin by the beginning...
@Roberto, I want to explain you my path in this challenge. let me explain it in spanish please , it has been tough... and is
more confortable for me if I can explain in our native language. I'm sorry in advance.

# Los pasos

## Figma Desing vs Resources vs README

Analizando en profundidad el diseño de figma, me enuentro con que hay colores en el diseño que no están en los proporcionados en los
mapas de color. Por ejemplo: los nombres de los stocks están a #000000 y ese color no existe en el bloque de colores.
Eso me hace pensar que tengo que analizar el diseño al pixel. Empiezo con un mock "pixel perfect" y es en ese momento,
cuando me doy cuenta de que hay colors, margings, paddings, font-size... que no son consecuentes con el png que me habéis dado:
es el caso de los literales que hay debajo de los nombres de las crypto, por ejemplo LUNA que tiene un color #82838B. Pero no pasa nada, pienso que este tipo de discrepancias en el
diseño son habituales en el día a día en nuestro sector.

A partir de este mock, todo fue mucho más sencillo.

Leyendo el README del proyecto encuentro: "*Plus. Responsive web design techniques used and the approach used for
layout.*"
Pienso: "pero si el diseño parece que está hecho para aplicación móvil nativa: navbar abajo, botones de app...etc" Para
llegar a ese plus que pedíais, me he inventado un diseño responsive para: Tablet portrait, Tablet Landscape y Desktop HD
dando continuidad al estilo. Espero que os guste ;) Y si no os gusta, espero por lo menos haber cumplido ese plus con mi
propuesta.

## Ke Crypto

Bajo mi punto de vista, todos los desarrollos que tengan parte frontend tienen que tener marca. 

Son visuales. 

Con marca me refiero a algo que relacione el contenido con un nombre, pues así  es más fácil identificar. 

Basándome en que es una aplicacion de cripto monedas y que os llamáis kelisto, he creado la marca **kecrypto**. Por eso se llama así el proyecto. 

Para que la marca tuviera consistencia, he diseñado un logo siguiendo vuestra línea de diseño (me costó mucho encontrar
el logo de kelisto en svg...) y a partir de él, he creado los favicon correspondientes para poder incluirlos en la app.

##Lenguaje: la decisión
Sabiendo que os encaja React js, y que por mi parte tengo conocimientos suficientes para montar el dashboard, me decanto
por la opción de Reactjs.

Y llega el primer escollo...

Llevo desarrollando en angular desde hace 4 semanas y tengo la cabeza orientada a interfaces y observables. Eso me
plantea parar y empezar de nuevo con React ts. Después de analizarlo mucho, pienso que me va a facilitar la vida
Reactjs.

## Sass, siempre Sass

Los estilos están desarrollados en Sass. Con sus variables, sus mixins, sus functions...etc
No lo he hecho con modules porque no comparto la idea de 'modularizar'. Es el debate de siempre, si se maqueta con Bem,
cargar un css
optimizado es más óptimo que hacer modules por componentes. Reactjs no es como Angular, no existe el shadow dom.
(O yo no se que existe...)

## Componentes y Escalabilidad

Llega el momento de análisis en profundidad de la escalabilidad de la aplicación:

- ¿Esta prueba de concepto es real?
- ¿A futuro el nombre del usuario irá acompañado de avatar?
- ¿el icono de la campana que representa? ¿un boton que al clicar hace que a parezca un popup con un resumen pequeño de
  las notificacioines y un enlace para ir a notificacions? Cuando el usuario tenga notificaciones ¿se le mostrará el
  número de notificaciones nuevas?
- ¿El saldo de posición global hay que mostrarlo en alguna otra pantalla?

Bajo estas preguntas, tomo la decisión de hacer los siguientes componentes:

**components**:
Dashboard:
GlobalPosition.js
StockList.js
StockListItem.js
shared
Alert.js
Button.js
Header.js
Layout.js
LoadingSpinner.js
Navigation.js
Profile.js

**A destacar:**

- Layout.js:
  Para poder dar distintas estructuras a las vistas y reutilizar los componentes comunes: header, footer.

- LoadingSpinner.js:
  Para poder sacar un loading en las llamadas a la api y en la carga de la página

Con respecto al árbol y estructura de carpetas, soy novata en arquitectura Reactjs, pero pienso que se entiende
perfectamente.

**Escalabilidad de componentes:**

- Alert.js:
  El componente Alert puede recibir por props "amount" como número de notificaciones a mostrar.
  Podéis probarlo:
  <code>
  <Alert icon="bell" amount={'5'}/>
  </code>


- Profile.js:
  El componente Profile puede recibir por props "avatar" como imagen de avatar del usuario
  Podéis probarlo:
  <code>
  <Profile userName="Anakin" avatar={'https://i.pravatar.cc/150?img=6'}/>
  </code>

## Páginas / Vistas / Como queráis que lo llamemos

En el Challenge solo hay que pintar una vista: el dashboard. Hasta aquí no digo nada nuevo, pero ¿quedaría bien mostrar
una navegación y que no funcionara? Debido a este punto, he creado las siguientes páginas:

**pages:**

- card
- dashboard
- notifications
- refresh
- settings

Las he llamado así porque así se llamaban los iconos.

**A destacar:**
He añadido la página de notificaciones porque doy por hecho de que si el usurio puede recibir notificaciones, podrá
navegar a la ruta para verlas.

## ¿fetch a un json?

Entiendo que cuando estamos desarrollando y el back aún no tiene los servicios, 'mockeemos' en un json la response (
previo
acuerdo de gobierno) para no para el desarrollo de front.

Pero ¿y si creamos el back? Tan sencillo como generar una rutas con express.js para que ons devuelva las llamadas.
Eso es lo que en un primer momento hice, y digo en un primer momento porque gracias al Big Data me apareció un
tutorial...

## ¡EL TUTORIAL!

Llegados a este punto, podía haberos enviado el repo, yo estaba satisfecha con lo desarrollado: un nodejs que sirve al
front, los componentes, el bem , la marca, los tests hasta donde llego...etc
Pero me llega un tutorial de Nextjs y recuerdo que @roberto me comentaste que vosotros desarrollabais sobre Nextjs (o me
quedé con eso)

Y llega el momento en el que me dispongo a migrar todo el código de Reactjs a Nextjs.

**Lectura de la migración**

- Migrar los componentes es bastante sencillo, Next tiene una documentación muy buena y accesible.
- Migrar el Sass tampoco... Bueno, no es cierto. He intentado hacer modules aplicando los <code>{styles}</code> y ha
  sido muy complicado. No he encontrado documentación de cómo pasar los ternarios de clases... Así que se ha quedado de
  manera global.
- El Router... En React yo tenía propuesto este router:
  <code>

<Route path={DASHBOARD} element={<Dashboard/>}/>

<Route path={REFRESH} element={<PageToDo pageTitle='Refresh'/> }/>

<Route path={CARD} element={<PageToDo pageTitle='Card'/> }/>

<Route path={SETTINGS} element={<PageToDo pageTitle='Settings'/> }/>

<Route path={NOTIFICATIONS} element={<PageToDo pageTitle='Notifications'/> }/>

<Route path={DEFAULT} element={<Navigate to={DASHBOARD}/>}/>
</code>

De manera que por props las páginas que no eran Dashboard recogían el título, evitando así la generación de nuevas
páginas que simplemente etán para la navegación pero hay que hacer a futuro.

La app iba envuelta de esta manera: SessionProvider > Router > Layout

En Next, al ir las páginas en función del árbol de directorio, he tenido que crear las vistas para la navegación...
supongo que habrá una manera de hacerlo pero no he dado con ello en el tiempo que tenía.


 - Los test: complicados ambos, pero mucho aprendizaje. Lo vemos ahora. 



## Test: Jest + React.js 18

No tengo mucha experiencia en desarrollar test, te lo comentaba el otro dia @roberto, pero os quiero agradecer este
challenge porque he aprendido muchísimo.
Ha sido lo que más me ha costado con diferencia. La parte del desarrollo que más tiempo me ha llevado. El no saber por
dónde empezar.

La parte más complicada ha sido la documentación de react 18 con el método create porque ya no se puede usar.

Me ha costado mucho poder renderizar cualquier componente aú siendo tonto.
Para ello he añadido unos métodos en test/test-utils.js donde se exporta la creación de los componentes según React 18ñ

He probado de mil maneras poder mockear el provider pero como además llevaba el Layout he tenido mucha dificultad, de
hecho no he podido sacarlo.
Lo seguiré intentando porque honestamente, tengo clavada la espinita.

Como las páginas dependían de getLayout (que hace que carguen todas con lo mismo layout) tampoco he podido sacar los
test.
Aún con todos los impedimentos y el tiempo que disponía para hacer el challenge, he llegado al 56.06. Se que es poco, pero yo estoy muy muy contenta.




# The End:

Muchas gracias nuevamente por darme esta oportunidad. Espero feedback constructivo del trabajo realizado. Sed benevolentes!!!

Teresa Quintano

###End
