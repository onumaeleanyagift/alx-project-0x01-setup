import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map(
            (
              {
                username,
                email,
                address,
                geo,
                phone,
                website,
                company,
                name,
              }: UserProps,
              id: number
            ) => (
              <UserCard
                id={id}
                username={username}
                email={email}
                address={address}
                geo={geo}
                phone={phone}
                website={website}
                company={company}
                name={name}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      posts: users,
    },
  };
}

export default Users;
