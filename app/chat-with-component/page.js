import dynamic from "next/dynamic";

const Chat = dynamic(() => import("../components/chat"), { ssr: false });

const Page = () => {
  return (
    <>
      <Chat />
    </>
  );
};

export default Page;
