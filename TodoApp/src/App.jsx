import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from "react-router-dom"
import "./App.css";
import TodoPage from "./pages/TodoPage";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";


function App() {

  return (
	<Routes>
		<Route exect path="/" element={<HomePage/>} />
		<Route path="/todo" element={<TodoPage/>} />
		<Route path="/today" element={<TodayPage/>} />
		<Route path="/calendar" element={<CalendarPage/>} />

	</Routes>
  );
}

export default App;
