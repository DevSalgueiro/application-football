import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./Tooltip.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function TooltipJogador() {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Clique para organizar o jogadores.
            </Tooltip>
          }
        >
          <Button variant="secondary"><p className='h5'>Jogador</p></Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipJogador;