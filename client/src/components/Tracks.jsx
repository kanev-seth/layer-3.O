import React from 'react';
import styled, { keyframes } from 'styled-components';

const TracksContainer = styled.div`
  background-color: #f4f1fc;
  padding: 30px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TracksTitle = styled.div`
  background-color: #9571DD;
  color: black;
  padding: 3px 36px 3px 36px;
  font-size: 38px;
  margin-bottom: 30px;
  box-shadow: 6px 6px 0 0 #000000;
  border: 4px solid black;
  font-weight: 700;
  font-stretch: 125%;
  margin-left: 1cm;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 850px;
  justify-content: center;
  align-self: center;
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 6px 6px 0 0 #000000;
  }
  100% {
    transform: translateY(-10px);
    box-shadow: 8px 8px 0 0 #000000;
  }
`;

const Card = styled.div`
  background-color: white;
  border: 4px solid black;
  padding: 20px;
  width: 400px;
  height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 6px 6px 0 0 #000000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    animation: ${hoverAnimation} 0.3s forwards;
  }
`;

const CardIcon = styled.div`
  font-size: 45px;
  margin-bottom: 10px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  width: 100%;
  word-break: break-word;
`;

const CardDescription = styled.div`
  font-size: 14px;
  text-align: left;
  width: 100%;
  word-break: break-word;
`;

function Tracks() {
  return (
    <TracksContainer>
      <TracksTitle>TRACKS</TracksTitle>
      <CardsContainer>
        <Card>
          <CardIcon>🛡️</CardIcon>
          <CardTitle>THREAT DETECTION & INCIDENT RESPONSE</CardTitle>
          <CardDescription>Focus on threat detection, incident response, and security operations. This track explores digital forensics and incident handling.</CardDescription>
        </Card>
        <Card>
          <CardIcon>🔗</CardIcon>
          <CardTitle>SOFTWARE SUPPLY CHAIN SECURITY</CardTitle>
          <CardDescription>Focus on the secure development lifecycle and software assurance. It will cover topics like code signing and dependency analysis.</CardDescription>
        </Card>
        <Card>
          <CardIcon>🔒</CardIcon>
          <CardTitle>DATA PRIVACY & PROTECTION</CardTitle>
          <CardDescription>Delve into data protection and privacy, covering topics like GDPR, CCPA, and other global regulations.</CardDescription>
        </Card>
        <Card>
          <CardIcon>🎮</CardIcon>
          <CardTitle>GAMIFICATION IN CYBERSECURITY</CardTitle>
          <CardDescription>Explore the use of gamification to enhance cybersecurity training and awareness among users.</CardDescription>
        </Card>
        <Card>
          <CardIcon>💻</CardIcon>
          <CardTitle>APPLICATION SECURITY</CardTitle>
          <CardDescription>All Application Security focus. Topics include mobile, web, serverless platforms, and cloud-based services. Also, AppSec and DevSecOps. Learn how to secure applications from the start of the application development lifecycle.</CardDescription>
        </Card>
        <Card>
          <CardIcon>🌐</CardIcon>
          <CardTitle>WEB3 SECURITY (WEB3SEC)</CardTitle>
          <CardDescription>Explore the world of Web3 security. Topics include smart contract security, decentralized applications, and decentralized autonomous organizations.</CardDescription>
        </Card>
        <Card>
          <CardIcon>↔</CardIcon>
          <CardTitle>DARK WEB MONITORING</CardTitle>
          <CardDescription>Dive into the dark web. Learn approaches to monitor and analyze data from the dark web for threat intelligence and cybersecurity purposes.</CardDescription>
        </Card>
        <Card>
          <CardIcon>💡</CardIcon>
          <CardTitle>OPEN INNOVATION</CardTitle>
          <CardDescription>Embrace the spirit of innovation and explore new ideas. Work on your own personal project, challenge or hackathon at the end.</CardDescription>
        </Card>
      </CardsContainer>
    </TracksContainer>
  );
}

export default Tracks;