import * as React from 'react';
import EmailForm from './email_form';
import Timer from './timer';

const Root: React.SFC<{}> = () => {
  return (
    <div className='main'>
      <h1>Swap</h1>

      <h3>
        The best marketplace exclusively for Berkeley students.
        <br />
        Find housing, furniture, textbooks, and more.
      </h3>

      <Timer />

      <EmailForm />


      <p>
        <strong>*Get a chance to win a $25 Amazon gift card!</strong>
        <br />
        <br />
        Winner will be randomly selected and notified from email pool.
        <br />
        <br />
        Your e-mail address will solely be used to provide timely information about Swap
      </p>

      <div className="background"></div>
    </div>
  );
};

export default Root;
