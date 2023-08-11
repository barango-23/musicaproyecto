import'../Tienda/Tienda.css'
export function Tienda() {
    let tienda = [
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa1.jpg?alt=media&token=518aa1ce-4ce5-421b-bae7-a29a6f287023",
            Prenda: "Hoodie",
            Referencia: "Culture II",
            Size: "M - L - XL",
            Precio: "60.00 Dls",
            id: "1"
        },
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa2.jpg?alt=media&token=250e4812-29f1-409c-b86c-b1610c90b487",
            Prenda: "Sweater",
            Referencia: "CULTURE II RED, WHITE, & BLUE LONGSLEEVE",
            Size: "M - L - XL",
            Precio: "45.00 Dls",
            id: "2"
        },
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa3.jpg?alt=media&token=9d50d9ef-fb3b-4733-b548-cf55f226f1de",
            Prenda: "Shirt",
            Referencia: "CULTURE COVER TEE",
            Size: "M - L - XL",
            Precio: "35.00 Dls",
            id: "3"
        },
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa4.jpg?alt=media&token=03f2ab54-0444-457c-8c4f-2112f1bd222a",
            Prenda: "Overalls",
            Referencia: "MIGOS TOUR COSTUME",
            Size: "M - L - XL",
            Precio: "125.00 Dls",
            id: "4"
        },
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa5.jpg?alt=media&token=c8ca64a9-ac49-40cb-8d1c-2b7c545e7477",
            Prenda: "Jacket",
            Referencia: "BOMBER JACKET",
            Size: "M - L - XL",
            Precio: "220.00 Dls",
            id: "5"
        },
        {
            Foto: "https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/ropa6.jpg?alt=media&token=d0ae8c68-5609-4799-88d9-bf89aa78208e",
            Prenda: "Shirt",
            Referencia: "CULTURE II DECAL TEE",
            Size: "M - L - XL",
            Precio: "35.00 Dls",
            id: "6"
        }

    ]

    return (
        <>
            <section className="row row-cols-2 row-cols-md-8 g-3">
                {




                    tienda.map(function (tienda) {
                        return (



                            <div key={tienda.id}>


                                <div className="col">
                                    <div className="card h-60">

                                        <h3 className="text-center fw-bold">{tienda.Prenda}</h3>
                                        <img src={tienda.Foto} alt="foto" className="img-fluid w-100 h-100" />
                                        <h3 className="text-center fw-bold text-warning">Referencia: {tienda.Referencia}</h3>
                                        <h3 className="text-center fw-bold">{tienda.Size}</h3>
                                        <h3 className="text-center fw-bold text-success">Precio: {tienda.Precio}</h3>

                                    </div>




                                </div>

                            </div>




                        )
                    })
                }
            </section>
        </>
    )
}