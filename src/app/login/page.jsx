import { PageHeader } from "@/components/common/page-header/PageHeader"
import { Spacer } from "@/components/common/spacer/Spacer"
import LoginForm from "@/components/login/LoginForm"


export const metadata ={
  title : "Login",
  description:"Login your account to acces all of are content and features."
}

const page = () => {
  return (
    <>
      <Spacer />
      <PageHeader title="Login" />
      <Spacer />
      <LoginForm />
      <Spacer/>
    </>
  );
}

export default page