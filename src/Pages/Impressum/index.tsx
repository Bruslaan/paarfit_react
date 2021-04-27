import React from 'react';
import './index.css';
import Footer from '../LandingPage/Footer/Footer';
import NavBar from '../LandingPage/NavBar';

const index = () => {
  return (
    <>
      <NavBar />
      <div className='impressum'>
        <h1 style={{ color: 'black' }}>Impressum</h1>
        <h2>Angaben gem. § 5 TMG</h2>
        <br />
        <span>PaarFit ist ein Dienst der PaarFit UG (haftungsbeschränkt)</span>
        <span>Adlzreiterstr. 27</span>
        <span>80337 München</span>
        <br />
        <span>E-Mail: info@PaarFit.de</span>
        <span>Web: https://www.PaarFit.de</span>
        <br />
        <span>Geschäftsführer: David Niedermayr, Jens Brüning</span>
        <span>Registergericht: München, HRB 261003</span>
        <br />
        <span>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        </span>
        <span>USt-ID Nr. DE337284392</span>
        <br />
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>

        <br />
        <h2>Informationen zur Online-Streitbeilegung:</h2>
        <br />
        <p>
          Die EU-Kommission hat im ersten Quartal 2016 eine Internetplattform
          zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“)
          bereitgestellt. Die OS-Plattform soll als Anlaufstelle zur
          außergerichtlichen Beilegung von Streitigkeiten betreffend
          vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen,
          dienen. Die OS-Plattform wird unter folgendem Link erreichbar sein:
          http://ec.europa.eu/consumers/odr
        </p>
      </div>
      <Footer />
    </>
  );
};

export default index;
