import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ApiContext } from './api/context/ApiContext';
import { ApiService } from './api/api';
import CustomNavbar from './components/elements/CustomNavbar';
import Gallery from './components/elements/Gallery';

function App() {
  const [username, setUsername] = useState(null);
  const [notes, setNotes] = useState([]); // Initialize state for notes

  const api: ApiService = useContext(ApiContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await api.getUserProfile();
      setUsername(data.username);
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await api.getNotes();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  return (
    <>
      <CustomNavbar username={username} />
      <Gallery cards={notes} />
    </>
  );
}

export default App;
