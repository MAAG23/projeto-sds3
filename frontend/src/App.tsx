import DataTable from './components/DataTable';
import footer from './components/footer';
import NavBar from './components/Navbar';

function App() {
    return (
        <>
            
            <div className="container">
                <h1 className="text-primary">Olá mundo!</h1>
            
            <DataTable />
            </div>
            <footer/>
        </>
    );
}

export default App;