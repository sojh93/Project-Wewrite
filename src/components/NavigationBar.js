import React from "react";
import { Nav } from 'rsuite';



const styles = {
    marginBottom: 50,
  };
  
  const CustomNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
        <Nav.Item eventKey="mywork">
          내 참여작
        </Nav.Item>
        <Nav.Item eventKey="bookmark">북마크한 작품</Nav.Item>
        <Nav.Item eventKey="favorite">좋아요한 작품</Nav.Item>
   
      </Nav>
    );
  };

  
  const Demo = () => {
    const [active, setActive] = React.useState('home');
    return (
      <div>
        <CustomNav active={active} onSelect={setActive} />
        <CustomNav appearance="tabs" active={active} onSelect={setActive} />
        <CustomNav appearance="tabs" reversed active={active} onSelect={setActive} />
        <CustomNav appearance="subtle" active={active} onSelect={setActive} />
        <CustomNav appearance="subtle" reversed active={active} onSelect={setActive} />
      </div>
    );
  };
  