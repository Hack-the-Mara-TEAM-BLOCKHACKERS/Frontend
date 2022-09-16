import React from 'react';
import logo from '../assets/logo.png';
import lock from '../assets/lock.png';
import pci from '../assets/pci.png';
import visa from '../assets/visa.png';
import mastecad from '../assets/MasterCard.png';
import mpesa from '../assets/mpesa.png';
import intasend from '../assets/intasend.png';
import mara from '../assets/mara.png';

const Success = () => {
  return (
    <div className="bg-pays w-100 h-100">
      <div className="row mx-auto">
        <div className="col-12 row">
          <div className="col-12 col-lg-6 full-height">
            <p className="pt-4 text-white h2 col-10 container">
              <p style={{ marginBottom: '150px' }}>
                <img
                  src={logo}
                  alt={"sopa-ereto's logo"}
                  className="rounds-start rounds-end"
                  width="40px"
                />{' '}
                <span className="text-muted" style={{ fontSize: '15', fontWeight: '500' }}>
                  <span className="text-blue">Sopa-</span>
                  <span className="text-danger">Ereto</span>
                </span>
              </p>
              <p className="ffw-light text-dark" style={{ fontSize: '40px' }}>
                Safe Checkout
              </p>
              <p className="text-muted mt-3 fw-light col-10" style={{ marginBottom: '150px' }}>
                Sopa-Ereto is a safe and faster way to pay with card (MasterCard and Visa) and
                mobile money
              </p>
              <div className="rounds-start rounds-end payment-border">
                <p className="p-3 m-0">
                  {' '}
                  <span className="bg-pays me-4 rounded-circle p-2">
                    <img src={lock} alt={'lock image'} width="14px" style={{ marginTop: '-4px' }} />
                  </span>
                  <span className="text-dark" style={{ marginLeft: '-15px' }}>
                    Safe checkout
                  </span>
                  <span className="text-dark fw-light" style={{ marginLeft: '195px' }}>
                    Secured by:{' '}
                  </span>
                  <img src={intasend} alt="intasend logo" width="80px" className="ms-1" />
                </p>
                <p style={{ borderTop: '1px solid rgb(176, 176, 176)' }}></p>
                <div className="m-0">
                  <img
                    src={pci}
                    alt={'PCI logo'}
                    width="70px"
                    style={{ marginRight: '40px', marginLeft: '40px' }}
                  />
                  <img src={visa} alt={'Visa logo'} width="70px" style={{ marginRight: '40px' }} />
                  <img
                    src={mastecad}
                    alt={'Mastecard logo'}
                    width="60px"
                    style={{ marginRight: '40px' }}
                  />
                  <img
                    src={mpesa}
                    alt={'Mpesa logo'}
                    width="70px"
                    style={{ marginRight: '40px' }}
                  />
                </div>
              </div>
              <p className="mt-4">
                <span
                  style={{ fontSize: '8px', marginLeft: '350px' }}
                  className="text-dark fw-light">
                  POWERED BY:{' '}
                </span>{' '}
                <img src={mara} alt="mara logo" width="70px" />
                <svg
                  className=""
                  id="Layer_222"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="100 50 900 240">
                  <defs>
                    <lineargradient
                      id="linear-gradient11"
                      x1="177.86"
                      y1="291.18"
                      x2="341.06"
                      y2="127.98"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#b090f5"></stop>
                      <stop offset="1" stopColor="#5fbfff"></stop>
                    </lineargradient>
                    <lineargradient
                      id="linear-gradient-21"
                      x1="96.43"
                      y1="207.75"
                      x2="259.64"
                      y2="44.55"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#68d7fa"></stop>
                      <stop offset="1" stopColor="#4ee498"></stop>
                    </lineargradient>
                  </defs>
                  <path
                    className="cls-1-11"
                    d="M319.43,110.37l-5-8.78a5.14,5.14,0,0,0-8.11-1.08L294.82,112a5.17,5.17,0,0,0-.64,6.51,90.22,90.22,0,0,1,10,20.58l0,0a90.2,90.2,0,0,1-85.45,119,89.38,89.38,0,0,1-42.26-10.49l19.45-19.46a64.41,64.41,0,0,0,80.77-88.29,5.15,5.15,0,0,0-8.29-1.41L256.76,150a5.14,5.14,0,0,0-1.37,4.82l1,4.18a38.63,38.63,0,0,1-56.75,42.39l-5.13-2.94a5.13,5.13,0,0,0-6.2.83l-47.51,47.5a5.15,5.15,0,0,0,.51,7.73l7,5.37a114.86,114.86,0,0,0,70.46,23.88A116,116,0,0,0,319.43,110.37Z"></path>
                  <path
                    className="cls-2-1"
                    d="M289.21,75.82a114.83,114.83,0,0,0-70.46-23.89A116,116,0,0,0,118.06,225.37l5,8.77a5.16,5.16,0,0,0,8.12,1.09l11.48-11.48a5.19,5.19,0,0,0,.64-6.5,89.81,89.81,0,0,1-10-20.58l0,0a90.2,90.2,0,0,1,85.45-119A89.29,89.29,0,0,1,261,88.19l-19.46,19.45a64.39,64.39,0,0,0-87.21,60.23c0,1.07.29,5.95.38,6.79a64.76,64.76,0,0,0,6.07,21.27,5.16,5.16,0,0,0,8.3,1.41l11.64-11.65a5.15,5.15,0,0,0,1.38-4.81l-1-4.19a38.62,38.62,0,0,1,56.75-42.38l5.13,2.94a5.16,5.16,0,0,0,6.2-.83l47.5-47.5a5.16,5.16,0,0,0-.5-7.74Z"></path>

                  <g
                    className="logo-header-text2"
                    data-svg-origin="385.4800109863281 103.79999542236328"
                    transform="matrix(1,0,0,1,0,0)">
                    <path
                      className="cls-4-1"
                      d="M484.48,199.84a4.7,4.7,0,0,0-6.09.14c-7.45,5.78-16.09,11.13-28.72,11.13-23.12,0-41.93-19.47-41.93-43.42s18.74-43.59,41.76-43.59c10,0,20.8,4.21,28.74,11.18a4.67,4.67,0,0,0,3.62,1.62,4.08,4.08,0,0,0,3-1.7l7.52-7.74a4.83,4.83,0,0,0,1.47-3.58,4.93,4.93,0,0,0-1.72-3.54C479,108.9,465.81,103.8,449.32,103.8c-35.2,0-63.84,28.82-63.84,64.24a63.94,63.94,0,0,0,63.84,63.89,60.32,60.32,0,0,0,43-17.3,5.32,5.32,0,0,0,1.52-3.85,4.21,4.21,0,0,0-1.36-3Z"
                      data-svg-origin="385.4800109863281 103.80000305175781"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                    <path
                      className="cls-4-1"
                      d="M539.21,105.54H527.82a5,5,0,0,0-4.83,4.85v115a5,5,0,0,0,4.83,4.86h11.39a5,5,0,0,0,4.83-4.86V110.39A5,5,0,0,0,539.21,105.54Z"
                      data-svg-origin="522.989990234375 105.54000091552734"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                    <path
                      className="cls-4-1"
                      d="M674,144.25c0-21.34-17.57-38.71-39.17-38.71H587.86a4.85,4.85,0,0,0-4.83,4.85v115a4.85,4.85,0,0,0,4.83,4.86h11.22a5,5,0,0,0,4.83-4.86V182.62h23.54L650,227.77a4.72,4.72,0,0,0,4.15,2.43h13.46a4.83,4.83,0,0,0,4.27-2.29,5.14,5.14,0,0,0,0-5L649,180.27C664.46,173.4,674,159.74,674,144.25Zm-21.05.35c0,10.83-8.93,20-19.5,20H604.26V125.49h29.15C644,125.49,652.91,134.24,652.91,144.6Z"
                      data-svg-origin="583.0299682617188 105.54000091552734"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                    <path
                      className="cls-4-1"
                      d="M796.59,199.84a4.7,4.7,0,0,0-6.09.14c-7.45,5.78-16.09,11.13-28.72,11.13-23.12,0-41.93-19.47-41.93-43.42s18.73-43.59,41.75-43.59c10,0,20.8,4.21,28.75,11.18A4.65,4.65,0,0,0,794,136.9a4.08,4.08,0,0,0,3-1.7l7.52-7.74a4.82,4.82,0,0,0,1.46-3.58,4.88,4.88,0,0,0-1.71-3.54c-13.1-11.44-26.29-16.54-42.78-16.54-35.2,0-63.84,28.82-63.84,64.24a63.94,63.94,0,0,0,63.84,63.89,60.34,60.34,0,0,0,43-17.3,5.33,5.33,0,0,0,1.52-3.86,4.2,4.2,0,0,0-1.36-3Z"
                      data-svg-origin="697.6499633789062 103.79999542236328"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                    <path
                      className="cls-4-1"
                      d="M901.35,210.94h-45.2V110.39a5,5,0,0,0-4.83-4.85H839.93a4.85,4.85,0,0,0-4.83,4.85v115a4.85,4.85,0,0,0,4.83,4.86h61.42a4.85,4.85,0,0,0,4.84-4.86v-9.55A4.85,4.85,0,0,0,901.35,210.94Z"
                      data-svg-origin="835.0999755859375 105.54000091552734"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                    <path
                      className="cls-4-1"
                      d="M1003.67,125a4.85,4.85,0,0,0,4.83-4.85v-9.73a4.85,4.85,0,0,0-4.83-4.85h-69a4.85,4.85,0,0,0-4.83,4.85v115a4.85,4.85,0,0,0,4.83,4.86h69a4.85,4.85,0,0,0,4.83-4.86v-9.55a4.85,4.85,0,0,0-4.83-4.85h-53V176.71h44.51a4.85,4.85,0,0,0,4.84-4.85v-9.72a5,5,0,0,0-4.84-4.86H950.7V125Z"
                      data-svg-origin="929.8399658203125 105.56999969482422"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ visibility: 'inherit', opacity: '1' }}></path>
                  </g>
                </svg>
              </p>
            </p>
          </div>
          <div className="new-color p-3 col-12 col-lg-6">
            <div className="h-48 px-4 py-4 pt-5 mt-5 ">
              <div className="celebrate-bg h-48 flex flex-col justify-center text-center">
                <div className="flex flex-row justify-center">
                  <img
                    src="https://intasend-staging-static.s3.amazonaws.com/img/payscreens/success.svg"
                    className="w-32"
                    alt="pay-success-icon"
                  />
                </div>
                <h1 className="text-2xl text-white">Payment Successful</h1>
                <p
                  className="text-light text-sm mt-3 col-7"
                  style={{ textAlign: 'left', marginLeft: '158px' }}>
                  You&rsquo;ll receive a payment confirmation by email shortly. We&rsquo;ve also
                  notified the recipient about the payment.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="success-bg col-12 col-lg-6">
          </div> */}
        </div>
      </div>
    </div>
    // <div className="colorss h-100" style={{ paddingTop: '80px' }}>
    //   {/* <NewNav /> */}
    //   <div className="text-center">
    //     <img sc={success} alt={'image'} width="300px" />
    //     <div
    //       className="bg-white p-4 rounds-start rounds-end"
    //       style={{ width: 'fit-content', marginLeft: '400px' }}>
    //       <img src={success2} className="bg-image" width={'400px'} />
    //       <p className="text-muted fw-bold fs-3" style={{ marginTop: '-50px' }}>
    //         Donation sent
    //       </p>
    //       <p className="text-muted">
    //         You&rsquo;ll recieve an Nft badge as an expression of our gratitude for this donation
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Success;
