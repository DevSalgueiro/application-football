import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem from '../imagens/animacao.gif'


export default function Sobre() {
  return (
    <div className='mt-5 container col-12'>

      <div className="clearfix">

          <img className='img-fluid col-md-6 col-lg-6 float-md-end mb-3 ms-md-3' src={Imagem} alt="Animação de um programador trabalhando."/>
        
          <h1>What is Lorem Ipsum?</h1>

          <p><br></br>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.<br></br><br></br>Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
          </p>

      </div>


      <div className="row col-12">

          <h4>What is Lorem Ipsum</h4>

          <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
          </p>

      </div>

    </div>
  )
}
 