import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

import { BrowserRouter } from "react-router-dom"
const Mock=({val})=>{
    return(< BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={val}/>
        </BrowserRouter>
        )
        
    
   
}
it('renders learn react link',async () => {
  render(<Mock val={5}/>);
  const linkElement = screen.getByText(/5 tasks left/i);
  expect(linkElement).toBeInTheDocument();
});
