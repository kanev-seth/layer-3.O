import React from 'react';
import styled, { keyframes } from 'styled-components';

const SponsorsSection = styled.section`
  padding: 64px 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SponsorsTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 48px;
  text-align: center;
  display: inline-block;
  border: 3px solid black;
  padding: 0px 32px;
  background-color: #9571DD;
  box-shadow: 6px 6px 0 0 #000000;
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%);
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SponsorsList = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 40s linear infinite;
  gap: 64px;
`;

const SponsorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: inherit;
`;

const SponsorLogoContainer = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SponsorLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  ${(props) => props.scale && `transform: scale(${props.scale});`}
  ${(props) => props.filter && `filter: ${props.filter};`}
`;

function Sponsors() {
  const sponsors = [
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/Devfolio_Logo-Black.png', alt: 'DEVFOLIO LOGO' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/Polygon_Logo-Dark.png', alt: 'POLYGON LOGO' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/ethindia-dark.png', alt: 'ETHINDIA LOGO' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/Copy%20of%200x.Day%20(1)%201.png', alt: '0x.Day LOGO' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/balsamiq.png', alt: 'BALSAMIQ_LOGO', scale: 0.9 },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/devArmylogo.png', alt: 'DEVARMY_LOGO' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/xyz-logo-white.png', alt: '.XYZ LOGO', scale: 0.5, filter: 'invert(1) brightness(0.9)' },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/image%20(1).png', alt: 'DERBI Foundation', scale: 1.05 },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/gmclogo.png', alt: 'GIVE_MY_CERTIFICATE_LOGO', scale: 0.75 },
    { src: 'https://pub-a1a941a6fb8445b7a079e0938a2e58e0.r2.dev/texas_review-modified.png', alt: 'Texas Review', filter: 'grayscale(1)' },
  ];

  return (
    <SponsorsSection id="sponsors">
      <Container>
        <SponsorsTitle>SPONSORS</SponsorsTitle>
        <ScrollContainer>
          <SponsorsList>
            <SponsorGroup>
              {sponsors.map((sponsor, index) => (
                <SponsorLogoContainer key={index}>
                  <SponsorLogo src={sponsor.src} alt={sponsor.alt} scale={sponsor.scale} filter={sponsor.filter} />
                </SponsorLogoContainer>
              ))}
            </SponsorGroup>
            <SponsorGroup>
              {sponsors.map((sponsor, index) => (
                <SponsorLogoContainer key={index + sponsors.length}>
                  <SponsorLogo src={sponsor.src} alt={sponsor.alt} scale={sponsor.scale} filter={sponsor.filter} />
                </SponsorLogoContainer>
              ))}
            </SponsorGroup>
          </SponsorsList>
        </ScrollContainer>
      </Container>
    </SponsorsSection>
  );
}

export default Sponsors;