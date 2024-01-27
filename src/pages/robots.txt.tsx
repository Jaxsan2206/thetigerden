import { GetServerSideProps, NextPage } from "next";


const Robots: NextPage = () => <></>;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    res
  } = context;

  res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
  res.write('User-agent: *\nDisallow: /\n');
  res.end()
  return {
    props: {}
  }
}

export default Robots;