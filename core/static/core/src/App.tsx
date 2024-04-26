import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ApiContext } from './api/context/ApiContext';
import { ApiService } from './api/api';
import CustomNavbar from './components/elements/CustomNavbar';

function App() {
  const [username, setUsername] = useState(null);
  const api: ApiService = useContext(ApiContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await api.getUserProfile();
      setUsername(data.username);
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <CustomNavbar username={username} />
    </>
  );
}

export default App;
