import { Loader } from "./ui-kit/Loader/Loader";
import { MainTemplate } from "../template/MainTemplate";

export const PrivateRoute = ({ loading, children }) => {
  if (loading) return <Loader small primary />;

  return <MainTemplate>{children}</MainTemplate>;
};
