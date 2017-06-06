import * as React from 'react';
import EmailForm from './email_form';

const Root: React.SFC<{}> = () => {
  return (
    <div>
      <h1>Swap</h1>

      <h3>
        The best marketplace exclusively for Berkeley students.
        Find housing, furniture, textbooks, and more.
      </h3>

      {/*<Timer />*/}

      <EmailForm />


      <p>
        *Get a chance to win a $25 Amazon gift card!
        Winner will be randomly selected and notified from email pool.
        Your e-mail address will solely be used to provide timely information about SwapNow
      </p>

      <div className="background"></div>
    </div>
  );
};

export default Root;
