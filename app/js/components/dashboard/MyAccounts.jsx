var React = require('react');
var PropTypes = React.PropTypes;

var MyAccountItem = require('./MyAccountItem');

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string,
    coinbase: PropTypes.string,
    accounts: PropTypes.array.isRequired
  },

  render: function() {
    var items = this.props.accounts.map(function(account) {
      return (
        <MyAccountItem key={account.address} default={this.props.default} coinbase={this.props.coinbase} {...account} />
      );
    }.bind(this));

    if (this.props.accounts.length > 0) {
      var total = this.props.accounts.reduce(function(sum, account) {
        return account.balance.plus(sum);
      }, 0);
      items.push(
        <MyAccountItem key={'total'} default={this.props.default} coinbase={this.props.coinbase} address={'0xTotal'} balance={total} />
      );
    } else {
      items.push(
        <MyAccountItem key={'total'} default={this.props.default} coinbase={this.props.coinbase} address={'0xTotal'} balance={null} />
      );
    }

    return (
      <div className="card component-info accounts">
        <h3 className='mui-font-style-title'>My Accounts</h3>
        <table className='table'>
          <thead>
            <tr>
              <th className='address'>Address</th>
              <th className='mark'></th>
              <th className='balance'>Balance (ethers)</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = MyAccounts;
