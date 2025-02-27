import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScheduleContainer = styled.div`
  background-color: black;
  color: white;
  font-family: sans-serif;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ScheduleTitleContainer = styled.div`
  background-color: #EE825A;
  color: white;
  border: 4px solid white;
  padding: 2px 20px 2px 20px;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 800;
  transform: rotate(-2deg);
  margin-left: 1cm;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-self: center;
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(2deg);
    box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.1);
  }
  100% {
    transform: translateY(-10px) rotate(0deg);
    box-shadow: 6px 6px 10px rgba(255, 255, 255, 0.2);
  }
`;

const DayBox = styled.div`
  background-color: black;
  border: 4px solid white;
  padding: 20px;
  width: 350px;
  box-sizing: border-box;
  transform: rotate(2deg);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    animation: ${hoverAnimation} 0.5s forwards;
  }
`;

const DayTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
`;

const ScheduleTime = styled.span`
  font-size: 14px;
`;

function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleTitleContainer>SCHEDULE</ScheduleTitleContainer>
      <DaysContainer>
        <DayBox>
          <DayTitle>DAY 1 - MARCH 1</DayTitle>
          <ScheduleItem>
            <span>Registration</span>
            <ScheduleTime>9:00 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Opening Ceremony</span>
            <ScheduleTime>9:30 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Hacking Begins</span>
            <ScheduleTime>11:00 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>First Round of Mentoring</span>
            <ScheduleTime>12:30 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Lunch</span>
            <ScheduleTime>2:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Evening Snacks</span>
            <ScheduleTime>5:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Second Round of Mentoring</span>
            <ScheduleTime>7:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Dinner</span>
            <ScheduleTime>9:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Midnight Activity</span>
            <ScheduleTime>12:00 AM</ScheduleTime>
          </ScheduleItem>
        </DayBox>
        <DayBox style={{ transform: 'rotate(-2deg)' }}>
          <DayTitle>DAY 2 - MARCH 2</DayTitle>
          <ScheduleItem>
            <span>Midnight snacks</span>
            <ScheduleTime>1:00 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Third Round of Mentoring</span>
            <ScheduleTime>6:00 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Breakfast</span>
            <ScheduleTime>7:30 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Judging Begins</span>
            <ScheduleTime>9:30 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Devfollo submission ends</span>
            <ScheduleTime>11:00 AM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Judging Ends</span>
            <ScheduleTime>1:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Lunch</span>
            <ScheduleTime>1:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Final top 10 and demos</span>
            <ScheduleTime>2:00 PM</ScheduleTime>
          </ScheduleItem>
          <ScheduleItem>
            <span>Closing Ceremony</span>
            <ScheduleTime>3:30 PM</ScheduleTime>
          </ScheduleItem>
        </DayBox>
      </DaysContainer>
    </ScheduleContainer>
  );
}

export default Schedule;