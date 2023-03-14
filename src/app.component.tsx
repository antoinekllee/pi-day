import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes.component';

const App = () => 
{
  return (<div>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </div>)
};

export { App };