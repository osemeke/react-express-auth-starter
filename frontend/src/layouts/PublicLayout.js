import { Outlet } from 'react-router-dom';
import TopNav from "../components/TopNav";

const PublicLayout = () => {
    return (
        <div>
          <TopNav />
          <Outlet />

        </div>
      );
}

export default PublicLayout;
