import { Link } from "react-router-dom";
import "./leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <button className="top">
        <img src="/images/briefcase.svg" alt="" className="icon" />
        Switch Organization
        <img src="/images/collapse.png" alt="" className="collapseImg" />
      </button>
      <Link to="/" className="dashboard">
        <img src="/images/homeIcon.png" alt="" className="icon" />
        Dashboard
      </Link>
      <div className="menu">
        <p>CUSTOMERS</p>
        <Link to="/users" className="menu__item">
          <img src="/images/user-friends.svg" alt="" className="icon" />
          Users
        </Link>
        <Link to="/guarantors" className="menu__item">
          <img
            src="/images/leftimages/guarantors.png"
            alt=""
            className="icon"
          />
          Guarantors
        </Link>
        <Link to="/loan" className="menu__item">
          <img src="/images/leftimages/loan.png" alt="" className="icon" />
          Loans
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/decision.png" alt="" className="icon" />
          Decision Models
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/savings.png" alt="" className="icon" />
          Savings
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/loanRequest.png"
            alt=""
            className="icon"
          />
          Loan Requests
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/whitelist.png" alt="" className="icon" />
          Whitelist
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/karma.png" alt="" className="icon" />
          Karma
        </Link>
      </div>
      <div className="menu">
        <p> BUSINESSES</p>
        <Link to="/user" className="menu__item">
          <img src="/images/briefcase.svg" alt="" className="icon" />
          Organization
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/loanRequest.png"
            alt=""
            className="icon"
          />
          Loan Products
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/savingProduct.png"
            alt=""
            className="icon"
          />
          Savings Products
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/fees.png" alt="" className="icon" />
          Fees and Charges
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/transaction.png"
            alt=""
            className="icon"
          />
          Transactions
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/services.png" alt="" className="icon" />
          Services
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/serviceAccount.png"
            alt=""
            className="icon"
          />
          Service Account
        </Link>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/settlement.png"
            alt=""
            className="icon"
          />
          Settlements
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/report.png" alt="" className="icon" />
          Reports
        </Link>
      </div>
      <div className="menu">
        <p>SETTINGS</p>
        <Link to="/user" className="menu__item">
          <img
            src="/images/leftimages/preference.png"
            alt=""
            className="icon"
          />
          Preferences
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/feesPrice.png" alt="" className="icon" />
          Fees and Pricing
        </Link>
        <Link to="/user" className="menu__item">
          <img src="/images/leftimages/auditlog.png" alt="" className="icon" />
          Audit Logs
        </Link>
      </div>
    </div>
  );
};

export default Leftbar;
