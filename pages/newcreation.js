import Layout from '../components/Layout/index';
import NewCreationForm from "../components/NewCreactionForm";

const NewCreation = () => {
  return (
    <Layout
      title="Add Creation"
      description="Add Creation Page"
      header={false}
      footer={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex justify-center flex-col items-center">
          <NewCreationForm />
        </div>
        <div className="bg-black hidden lg:block">dsfdsf</div>
      </div>
    </Layout>
  );
};

export default NewCreation;
