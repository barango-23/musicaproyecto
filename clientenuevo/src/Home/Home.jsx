
import './Home.css'
import { History } from '../History/History'

export function Home() {
  return (
    <>
      <div id="carousel1" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/MIGOS7.jpg?alt=media&token=b85cf9d8-3412-4de7-8bc5-985acd47cc19" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/migoscarousel2.jpg?alt=media&token=48302e0c-3e7c-40d2-a965-899683f4a90d" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/musicajp-4de48.appspot.com/o/migoscarousel.jpg?alt=media&token=38f84ace-b0c5-41bb-a12a-eda48d1fa33a" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <section>
        <History></History>
      </section>
    </>
  )
}