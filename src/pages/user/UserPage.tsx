import Card from "../../components/card/Card";
import "./userpage.scss";
const UserPage = () => {
  return (
    <div className="users">
      <h1>Users</h1>
      <div className="dashboard__header">
        <Card img="/images/userIcon.svg" title="USERS" totalNumber={2453} />
        <Card
          img="/images/activeUsersIcon.svg"
          title="Active Users"
          totalNumber={2453}
        />
        <Card
          img="/images/usersWithLoanIcon.svg"
          title="Users with Loans"
          totalNumber={12453}
        />
        <Card
          img="/images/usersWithSavingsIcon.svg"
          title="Users with Savings"
          totalNumber={102453}
        />
      </div>
    </div>
  );
};
 
export default UserPage;