import './App.css';
import Clients from './components/Clients';
import ClientForm from './components/ClientForm';
import { getData, deleteData, postData } from './api';
import { useState, useEffect } from 'react';
import Search from './components/Search';


function App() {

  const [clients, setClients] = useState([])

  const getDataClients = async () => {
    try {
      const data = await getData("http://localhost:3770/clients");
      setClients(data)
    }
    catch {

    }
  }

  const getDataClientsByName = async (name) => {
    try {
      const data = await getData(`http://localhost:3770/clients?name=${name}`);
      setClients(data)
    }
    catch {

    }
  }

  const deleteClient = async (id) => {
    await deleteData(id);
    getDataClients();

  }
  const addClient = async (event, newClient) => {
    event.preventDefault();
    await postData(newClient)
    getDataClients();
  };
  useEffect(() => {
    getDataClients();
  }, [])


  return (
    <div>
      <h1>client-database</h1>
      <ClientForm onAdd={addClient} />
      <Search onChange={getDataClientsByName} />
      {clients.length > 0 && <Clients onDelete={deleteClient} data={clients} />}
    </div>
  );
}

export default App;
