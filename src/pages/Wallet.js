import React from 'react';
import { connect } from 'react-redux';

// class Wallet extends React.Component {
//   render() {
//     return <div>TrybeWallet</div>;
//   }
// }
const Wallet = (props) => (
  <div className="">
    <h1>TrybeWallet</h1>
    <p>
      email:
      {props.user.email}
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Wallet);
