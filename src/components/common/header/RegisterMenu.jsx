import Link from "next/link";



export const RegisterMenu = async () => {

  return (
    <div>
      <Link href="/register" className="btn btn-danger m-2">
        <i className="pi pi-user-plus"></i> Register
      </Link>
    </div>
  );
};