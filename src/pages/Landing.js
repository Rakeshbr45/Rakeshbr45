import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking Megu</span> app
          </h1>
          <p>
          Innovaskill is eagerly following up the current requirement of each client and noted the uniquenes, so we provide services based on individual needs and requirements for young talents under the umbrella of tech and management profession to provide accurate resolutions. We serves our clients the best to provide customized solutions by considering Clients’ corporate culture, management style and philosophy. We work for almost all the sectors and our services are available across nation (PAN) For any kind of Manpower Requirements please feel free to reach out to us by filling the details below and we will contact you soon.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
