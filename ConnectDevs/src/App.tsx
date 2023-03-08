import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import { AppRouter } from './routes';

const App = () => (
    <>
        <AppRouter />
		<ToastContainer theme='dark' transition={Slide}/>
    </>
);

export default App;
