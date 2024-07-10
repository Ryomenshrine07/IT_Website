import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { DownOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

  const [isFixed, setIsFixed] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the value as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const items = [
    {
      key: '1',
      label: (
        <Link to={'/services/database_management'}>
          Database Management
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={'/services/it_consultancy'}>
          IT Consultancy
        </Link>
      ),
      icon: '',
    },
    {
      key: '3',
      label: (
        <Link to={'/services/app_developent'}>
          App Development
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link to={'/services/database_security'}>
          Database Security
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link to={'/services/it_training'}>
          IT Training
        </Link>
      ),
    },
    {
      key: '6',
      label: (
        <Link to={'/services/web_development'}>
          Web Development
        </Link>
      ),
    },
  ];

  return (
    <div>
      <nav className={`Navbar ${isFixed ? 'fixed' : ''}`}>
        <ul>
          <li><Link style={{color:'black',textDecoration:'none'}} to="/">Home</Link></li>
          <li><Link style={{textDecoration:'none',color:'black'}} to="/about">About</Link></li>
          <li>
            <Dropdown menu={{ items, }}>
              <Link style={{color:'black'}} to={'/services'}>
                <Space>
                  Services
                  <DownOutlined/>
                </Space>
              </Link>
            </Dropdown>
          </li>
          <li><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link></li>
          <button onClick={() => navigate('/contact')}><span>Get Quote<FontAwesomeIcon className='icon' icon={faArrowRight} /></span></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar