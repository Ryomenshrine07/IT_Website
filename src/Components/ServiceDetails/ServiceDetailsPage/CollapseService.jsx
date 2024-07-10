import { SettingOutlined } from '@ant-design/icons';
import { Collapse} from 'antd';
const text = `
  It is a long established fact that a reader be distracted by the readable content of a page when looking a its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum
`;

const CollapseService = () => {
    const onChange = (key) => {
      console.log(key);
    };
    const genExtra = () => (
      <SettingOutlined
        onClick={(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          event.stopPropagation();
        }}
      />
    );
    const items = [
      {
        key: '1',
        label: 'Where should I incorporate my business ?',
        children: <div style={{fontSize:'1.2em'}}>{text}</div>,
        extra: genExtra(),
      },
      {
        key: '2',
        label: 'What happens my free trial ?',
        children: <div style={{fontSize:'1.2em'}}>{text}</div>,
        extra: genExtra(),
      },
      {
        key: '3',
        label: 'What is included in your services ?',
        children: <div style={{fontSize:'1.2em'}}>{text}</div>,
        extra: genExtra(),
      },
      {
        key: '4',
        label: 'What type of company is measured ?',
        children: <div style={{fontSize:'1.2em'}}>{text}</div>,
        extra: genExtra(),
      },
    ];
  


  return (
    <div style={{marginTop:'2em'}}>
        <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        items={items}
      />
      <br />
    </div>
  )
}

export default CollapseService