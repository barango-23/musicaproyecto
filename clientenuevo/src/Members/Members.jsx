import '../Members/Members.css'
export function Members(){

    let integrantes=[
        { nombre:"Quavious Keyate Marshall",
        nombre_artistico:"Quavo",
        rol:"Cantante",
        foto:"https://i.discogs.com/InMlo2zcVi5eKMsNakCwnaBIBNG7AJf8ITyHViP9cno/rs:fit/g:sm/q:90/h:606/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM3NTUx/MTUtMTU1ODk2MzUz/OC05NzI1LmpwZWc.jpeg",
        nacimiento:"2 de abril de 1991, Athens, Georgia, Estados Unidos",
        dato:"Nació en Atenas, Georgia, el 2 de abril de 1991, hijo de Edna Marshall, una peluquera. Su padre falleció cuanto tenía cuatro años. Quavo se crio en el condado de Gwinnett junto a los miembros de Migos, Offset y TakeOff; Offset es su primo y TakeOff su sobrino. Estudió en la Berkmar High School, donde fue mariscal del equipo de fútbol americano. Durante su último año en la institución, Quavo sería uno de los jugadores más destacados del equipo, alcanzando un récord de 28 pases en un encuentro. A pesar de ser una prominente estrella del fútbol, Quavo deicidio dejar la institución antes de su graduación para dedicarse por completo a la música.  Para ese entonces, Migos ya existía.En 2015, Quavo fue apresado junto a sus compañeros de Migos por posesión de marihuana y un arma de fuego. Fue dejado en libertad, tras pagar la fianza. Su sentencia fue suspendida,  en su lugar pago varias multas.",
        id:1},

        {nombre:"Kirshnik Khari Ball",
        nombre_artistico:"Takeoff",
        rol:"Cantante",
        foto:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13C5B/production/_127478908_gettyimages-852603210.jpg",
        nacimiento:"18 de junio de 1994, Lawrenceville, Georgia, Estados Unidos - 1 de noviembre de 2022, Houston, Texas, Estados Unidos",
        dato:"De sus primeros años no hay mucha información, pero se sabe que, desde un inicio TakeOff comenzaba a desarrollar ritmos y a mostrar habilidades musicales. Pero esto no fue sorpresa y algo fuera de lo común, ya que se crío en una familia de artistas, entre ellos su primo Offset y su tío Quavo. Es hermano del rapero YRN Lingo, TakeOff se encontraba junto a su tío Quavo, departiendo en el 810 Billiards & Bowling. Según los reportes, se dice que Quavo tuvo un altercado mientras participaba en un juego de dados en este lugar. Una pandilla del lugar llegó y empezó un tiroteo a causa de ello, y es ahí cuando cae el rapero TakeOff. Se dice que él no estaba involucrado en el altercado, pero lamentablemente una bala le alcanzó y le impactó la cabeza y muere al instante. Quavo salió ileso de la confrontación,Los hechos ocurrieron el 1 de noviembre del 2022, en Houston, Texas, Estados Unidos.",
        id:2},

        {nombre:"Kiari Kendrell Cephus",
        nombre_artistico:"Offset",
        rol:"Cantante",
        foto:"https://pyxis.nymag.com/v1/imgs/b5e/352/36187d5fde13b9d59cabced1a1367881a8-offset.1x.rsquare.w1400.jpg",
        nacimiento:"14 de diciembre de 1991, Lawrenceville, Georgia, Estados Unidos",
        dato:"En 2017, Offset empezó a salir con la rapera dominicana-estadounidense Cardi B. El 27 de octubre de 2017 él le propuso matrimonio en una presentación en vivo en Power 99's Powerhouse en Philadelphia, Pensilvania. Se casaron en secreto ese mismo año. El 10 de julio de 2018 tuvieron a su hija Kulture Kiari Cephus. En septiembre de 2020 se hizo público que Cardi B le había pedido el divorcio.​ Sin embargo, un mes después se reconciliaron. El 4 de septiembre de 2021 nació el segundo hijo que tienen en común.",
        id:3}
    ]


    function quehagocuandosedeelevento(evento){
        (evento.target.classList.add("blancoynegro"))
    }

    function quehagocuandosedeelotroevento(evento){
        (evento.target.classList.remove("blancoynegro"))
    }

    

    

    return(
        <>
            
                {




                    integrantes.map(function(integrante){
                        return(

                            
                            
                            <div key={integrante.id}>
                                <div className="row">

                                <div className="col-12 col-md-6 card2">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <img src={integrante.foto} alt="foto" className="img-fluid w-100 h-100" onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento} />
                                        <h3 className="text-center fw-bold text-info">NOMBRE ARTISTICO: {integrante.nombre_artistico}</h3>
                                        <h3 className="text-center fw-bold">{integrante.nacimiento}</h3>
                                        <h3 className="text-center fw-bold">ROL: {integrante.rol}</h3>



                                </div>
                                <div className="col-12 col-md-6 ">
                                    <h3 className="titulo">DATO CURIOSO</h3>
                                    <p className="dato">{integrante.dato}</p>
                                </div>
                                </div>
                            </div>



                        )
                    })
                }
            

        </>
    )
}