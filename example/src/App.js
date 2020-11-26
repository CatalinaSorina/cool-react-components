import React, { useState } from 'react';
import { Input, TabForm, Form } from 'cool-react-components';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ textAlign: 'center', background: '#2F3336' }}>
      <Form
        // removeDots
        tabsStyle={{
          height: '75vh',
          styledComponents: `
            border-radius:0;
            background:rgba(193, 255, 218,0.5);
          `
        }}
        styledComponents='background:lightyellow;'
        // dotsStyledComponents={`
        //   background:#D4EFDF;
        //   border-color:#6E8979;
        //   :hover {
        //     box-shadow:none;
        //     transform: scale(2);
        //   }
        // `}
        // dotsActiveStyledComponents='background:#6E8979;box-shadow:none;'
        // arrowsStyledComponents={`
        //   color:#FF8585;
        //   text-shadow:none;
        //   :disabled{
        //     color:pink;
        //   }
        //   :hover:not(:disabled){
        //     color:#6E8979;
        //   }
        // `}
        dotsStyle={{
          color: '#D4EFDF',
          hoverShadowColor: '#6E8979',
          activeColor: '#9ac4aa',
          activeHoverColor: '#6E8980'
        }}
        arrowsStyle={{
          color: '#FF8585',
          disabledColor: 'white',
          hoverColor: '#6E8979'
        }}
      >
        <TabForm blockNext={!email}>
          1.Hello
          <Input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // styledComponents={`
            //   font:15px Coursive;
            //   &[type='text'] {
            //     color:#6E8979;
            //   }
            // `}
            textEmailStyle={{
              textColor: '#6E8979',
              borderColor: '#6E8979'
            }}
          />
          <Input
            type='submit'
            disabled={email === ''}
            // styledComponents={`
            //   font:15px Coursive;
            //   &[type='submit'] {
            //     background:#6E8979;
            //     border-color:#6E8979;
            //   }
            // `}
            submitStyle={{
              color: 'white',
              background: '#6E8979',
              hoverBackground: '#9ac4aa',
              disabledBackground: '#D4EFDF'
            }}
          />
        </TabForm>
        <TabForm styledComponents='background:rgba(255, 193, 193,0.5);'>
          2.HI
          <Input type='submit' disabled={email === ''} />
          <Input type='submit' disabled={email === ''} />
          <Input type='submit' disabled={email === ''} />
        </TabForm>
        <TabForm>
          3.Test
          <Input type='text' placeholder='name' />
          <Input type='text' placeholder='phone' />
          <Input type='text' placeholder='email' />
        </TabForm>
        <TabForm>
          4.Test
          <div>
            <Input
              type='text'
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <Input type='submit' disabled={email === ''} />
          </div>
          <div>
            <Input type='text' placeholder='name' />
            <Input type='submit' disabled={email === ''} />
          </div>
        </TabForm>
        <TabForm>5.Test</TabForm>
        <TabForm>6.Test</TabForm>
      </Form>
    </div>
  );
};

export default App;
