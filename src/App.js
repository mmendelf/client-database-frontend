import './App.css';
import Clients from './components/Clients';
import ClientForm from './components/ClientForm';
import { getData, deleteData, postData } from './api';
import { useState, useEffect } from 'react';
import Search from './components/Search';


function App() {

  const [clients, setClients] = useState([])
  const [isopen, setisopen] = useState(false)

  const getDataClients = async () => {
    try {
      const data = await getData("http://localhost:3770/clients");
      setClients(data)
    }
    catch (err) {
      throw err;
  }
  };

  const getDataClientsByName = async (name) => {
    try {
      const data = await getData(`http://localhost:3770/clients?name=${name}`);
      setClients(data)
    }
    catch (err) {
      throw err;
  }
  };

  const deleteClient = async (id) => {
    await deleteData(id);
    getDataClients();
  };

  const addClient = async (event, newClient) => {
    event.preventDefault();
    await postData(newClient)
    getDataClients();
    setisopen(false)
  };

  useEffect(() => {
    getDataClients();
  }, [])


  return (
    <div>
      <h1>client-database</h1>
      {!isopen && <button onClick={() => setisopen(true)}>add Client</button>}
      {isopen && <ClientForm onAdd={addClient} onClose={() => setisopen(false)} />}
      <Search onChange={getDataClientsByName} />
      {clients.length > 0 && <Clients onDelete={deleteClient} data={clients} />}
    </div>
  );
}

export default App;
