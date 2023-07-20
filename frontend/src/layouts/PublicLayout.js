import { Outlet } from 'react-router-dom';
import TopNav from "../components/TopNav";

const PublicLayout = () => {
    return (
        <div>
          <h1>Public Place</h1>
          <TopNav />
          <Outlet />

        </div>
      );
}

export default PublicLayout;
