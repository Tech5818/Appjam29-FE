import { useState } from 'react';
import { AudioIcon } from '@shared/ui/AudioIcon';
import styled from 'styled-components';

export const WandPage = () => {
  const [isListening, setIsListening] = useState(false);

  // 음성 인식 객체 생성
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = false; // 연속 인식 비활성화
  recognition.lang = 'ko-KR';

  // 음성 인식 결과 이벤트
  recognition.onresult = (event: any) => {
    const transcript = Array.from(event.results)
      .map((result: any) => result[0].transcript)
      .join('');
    console.log('변환된 텍스트:', transcript);
  };

  // 음성 인식 오류 이벤트
  recognition.onerror = (event: any) => {
    console.error('음성 인식 오류:', event.error);
  };

  // 음성 인식 종료 후 다시 시작할 수 있도록 리셋
  recognition.onend = () => {
    if (isListening) {
      recognition.start(); // 음성 인식 시작
    }
  };

  // 버튼 클릭 시 음성 인식 시작/중지
  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
      console.log('음성 인식 종료');
    } else {
      recognition.start();
      console.log('음성 인식 시작');
    }
    setIsListening(!isListening);
  };

  return (
    <Container>
      <AudioButton
        $isListening={isListening} // $isListening으로 수정
        onClick={toggleListening}
      >
        <AudioIcon />
      </AudioButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const AudioButton = styled.div<{ $isListening: boolean }>`
  // $isListening으로 수정
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: ${({ theme, $isListening }) =>
    $isListening ? 'red' : theme.light.color.green};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
`;
