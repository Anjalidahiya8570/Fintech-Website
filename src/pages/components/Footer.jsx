import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import nvctilogo from '../images/nvcti.png';

export default function App() {
  return (
    <MDBFooter color='white' bgColor='dark' className='text-center text-lg-start' style={{marginTop: "60px"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img src={nvctilogo} alt="nvcti logo" style={{height : "9em", borderRadius: "50%"}}/>
              <h6 className='text-uppercase fw-bold mb-4' style={{marginTop : "1em"}}>
              &ensp; NVCTI IIT (ISM)
              </h6>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              {/* 2nd Column (Not Used) */}
                
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sections</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/members' className='text-reset'>
                  Members
                </a>
              </p>
              <p>
                <a href='/events' className='text-reset'>
                  Events
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="location-dot" className="me-2" />
                IIT (ISM), Dhanbad
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:fintech_club@iitism.ac.in" style={{color: "white", textDecoration:"none"}}>fintech_club@iitism.ac.in</a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        © 2023 Copyright:&ensp; Fintech, IIT (ISM)
      </div> */}
    </MDBFooter>
  );
}