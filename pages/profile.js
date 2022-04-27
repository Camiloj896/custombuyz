import Layout from "../components/Layout/index";
import UpperProfile from "../components/UpperProfile";

const Profile = () => {
  return (
    <Layout title="Profile" description="Profile Page" header={false}>
      <div className="flex flex-col items-center">
        <UpperProfile />
      </div>
    </Layout>
  );
};

export default Profile;
