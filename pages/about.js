import SectionTitle from "../components/SectionTitle/index";
import About from "../components/About";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout title="About" description="About Page">
        <div className="flex justify-center flex-col items-center pt-40 bg-black">
          <About />
        </div>
    </Layout>
  );
};

export default Signup;
