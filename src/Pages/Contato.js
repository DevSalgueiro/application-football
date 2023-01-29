import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem from '../imagens/animacao.gif'
import "./Contato.css";


export default function Contato() {
  return (
    <div className='mt-5 container col-12'>

      <div className="clearfix">

        <img className='img-fluid col-md-6 col-lg-6 float-md-end mb-3 ms-md-3' src={Imagem} alt="Animação de um programador trabalhando."/>

      
      <form className="row g-3 mt-5">

          <div className='col-12 mt-4'>
            <label for="nome" className="form-label">
              <span>Nome</span>
              <input type="text" className="form-control plus_input" id="nome" placeholder='Digite o seu nome completo :)'/>
            </label>
          </div>

          <div className='col-12 mt-4'>
            <label for="email" className="form-label">
              <span>E-mail</span>
              <input type="text" className="form-control plus_input" id="email" placeholder='Digite o seu e-mail'/>
            </label>
          </div>

          <div className='col-12 mt-4'>
            <label for="endereco" className="form-label">
              <span>Endereço</span>
              <input type="text" className="form-control plus_input" id="endereco" placeholder='Digite o seu endereço'/>
            </label>
          </div>

          <div className='col-md-6 mt-4'>
            <label for="cidade" className="form-label">
              <span>Cidade</span>
              <input type="text" id="cidade" class="form-control" />
            </label>
          </div>

          <div className='col-md-6 mt-4'>
            <label for="estado" className="form-label">
              <span>Estado</span>
                <select id="estado" class="form-select plus_input_estado">
                  <option selected>Escolha...</option>
                  <option>RJ</option>
                  <option>SP</option>
                  <option>MG</option>
                </select>
            </label>
          </div>
          
          <div>
              <input type="submit" value="Enviar" className='btn btn-primary'/>
          </div>

      </form>


        </div>

    </div>
  )
}
 