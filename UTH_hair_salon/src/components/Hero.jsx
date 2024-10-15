import React from 'react';


const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <Title>Làm tóc hơi bị đẹp á</Title>
      <Title level={2}>Trust me brocoli.</Title>
      <Paragraph>Đang suy nghĩ viết vì cho người ta thấy hay</Paragraph>
      <Button type="primary" size="large">Book an appointment</Button>
    </div>
  );
};

export default Hero;