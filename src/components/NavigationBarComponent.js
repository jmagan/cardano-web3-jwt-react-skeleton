import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { WalletAPIContext } from '../context/WalletAPIContext';

import WalletIcon from './WalletIconComponent';



export default function NavigationBarComponent() {

  const { cardano } = window

  const { address, networkId, selectWallet, selectedWallet } = useContext(WalletAPIContext)

  useEffect(() => {
    console.log("Address changed", address)
  }, [address])

  useEffect(() => {
    console.log("NetworkId changed", networkId)
  }, [networkId])

  return (<>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to='/'><img src="/logo192.png" alt="Cardania NFT Marketplace" style={{height: "35px"}}/></Link>
        <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>Sign Up</Link>
            </li>
            <li className='nav-item navbar-text'>
              {address ? <span className='p-2 text-white bg-success border border-success rounded-pill'>{networkId === 0 ? 'Testnet' : 'Mainnet'} </span> : ''}
            </li>
            <li className="nav-item mt-2 mt-sm-0">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle ms-2 me-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  { selectedWallet !== null &&
                    <WalletIcon></WalletIcon>
                  } { selectedWallet == null &&
                    "Not Connected"
                  }
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  {cardano?.nami && selectedWallet !== 'Nami' &&
                    <li>
                      <button className="dropdown-item align-middle" onClick={ () => selectWallet('Nami')}>
                        <img src={cardano.nami.icon} alt="" height="18px" style={{ marginRight: '10px' }} /> Nami
                      </button>
                    </li>
                  }
                  {cardano?.eternl && selectedWallet !== 'Eternl' &&
                    <li>
                      <button className="dropdown-item align-bottom" onClick={ () => selectWallet('Eternl') }>
                        <img src={cardano.eternl.icon} alt="" height="18px" style={{ marginRight: '10px' }} /> Eternl
                      </button>
                    </li>
                  }
                  {cardano?.flint && selectedWallet !== 'Flint' &&
                    <li>
                      <button className="dropdown-item align-bottom" onClick={ () => selectWallet('Flint') }>
                        <img src={cardano.flint.icon} alt="" height="18px" style={{ marginRight: '10px' }} /> Flint
                      </button>
                    </li>
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}