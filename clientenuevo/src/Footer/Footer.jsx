import '../Footer/Footer.css'
export function Footer(){
    return(
        <>
        <section className='Footer'>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                    <h2>Brayan Arango</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/migos6.png?alt=media&token=ff074e1c-8e5b-4f93-8e56-2102593465bc" alt="" className='imgf'/>
                    </div>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 text-center" >
                    <h2>Redes</h2>
                        <ul>
                            <li><i class="bi bi-instagram"> INSTAGRAM: brm_23</i></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="row">


                    <hr />
                    <div className="col-12 text-center">
                        <p>&copy; 2023 - Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}