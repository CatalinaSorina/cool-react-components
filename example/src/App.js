import React, { useState } from 'react';
import { Input, TabForm, Form } from 'cool-react-components';

const App = () => {
  const [email, setEmail] = useState('');
  return (
    <div style={{ textAlign: 'center', background: '#2F3336' }}>
      <Form tabsStyle={{ height: '70vh' }}>
        <TabForm>
          1.Hello
          <div>
            <Input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='submit'
              disabled={email === ''}
              onClick={TabForm.next}
            />
            {console.log(TabForm)}
          </div>
        </TabForm>
        <TabForm>
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
