import { PageHeader } from "@/components/common/page-header/PageHeader"
import { Spacer } from "@/components/common/spacer/Spacer"
import LoginForm from "@/components/login/LoginForm"
import SingUp from "@/components/login/SingUp"

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
      <PageHeader title="Sing Up" />
      <Spacer />
      <SingUp />
      <Spacer />
    </>
  );
}

export default page