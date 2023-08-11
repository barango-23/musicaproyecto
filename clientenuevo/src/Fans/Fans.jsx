import '../Fans/Fans.css'
export function Fans(){
    return(
        <>
        <section className='formulario '>
        

            <div className='login-form  '>
                <h1>Login</h1>
                <form action="">
                    <p>username</p>
                    <input type="text" name="" id="" />
                    <p>Email</p>
                    <input type="email" name="email" id="" />
                    <a href=""><input type="submit" value="Enviar" className='btn btn-light bnn'/></a>

                </form>
            </div>
        </section>

        <section className='formfan'>
            <div className="row">
                <div className="col-md-12 ">
                    
                    <form action="">
                        <div className="ask">
                        <h3>¿En que año comenzaron THE MIGOS?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2009</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2015</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2003</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2020</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Cual fue la primera cancion popular THE MIGOS?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Versace</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Narcos</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Cocoon</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Jane</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Con cual de estos artistas a hecho colaboracion THE MIGOS?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Drake</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Gucci Mane</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Post Malone</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Todas las anteriores</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿En que año murio el integrante TAKEOFF?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 2015</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 2022</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 2018</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 2006</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Cual de las siguiente cancion es en colaboracion con DRAKE?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Slippery</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Notice Me</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Walk It Talk It</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Ninguna de las anteriores</label> <br />
                        </div>
                 

                    </form>
                </div>
            </div>

        </section>
        </>
    )
}