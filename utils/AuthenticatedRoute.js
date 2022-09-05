import { useRouter } from "next/router";

const AuthenticatedRoute = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const accessToken = localStorage.getItem("TOKEN");
      if (!accessToken) {
        router.push("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default AuthenticatedRoute;
