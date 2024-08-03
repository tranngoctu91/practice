import logo from "./logo.svg";
import "./App.css";
import Photos from "./components/photo/Photos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewsRDC from "./components/news/HackerNewsRDC";
import Input from "./components/learnUseRef/Input";
import TextArea from "./components/learnUseRef/TextArea";
import Dropdown from "./components/learnUseRef/Dropdown";
import Blog from "./components/learnUseRef/Blog";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import Form from "./components/forms/Form";
import MovieSearchApp from "./components/movies/MovieSearchApp";
import SignUpForm from "./components/forms/formik/SignUpForm";
import SignUpFormYup from "./components/forms/formik/SignUpFormYup";
import SignUpFormYupV2 from "./components/forms/formik/SignUpFormYupV2";
import SignUpFormRhf from "./components/forms/RHF/SignUpFormRhf";

function App() {
  return (
    <div className="App">
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsRDC></HackerNewsRDC> */}
      {/* <Input></Input> */}
      {/* <TextArea></TextArea> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Blog></Blog> */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormYup></SignUpFormYup> */}
      {/* <SignUpFormYupV2></SignUpFormYupV2> */}
      <SignUpFormRhf></SignUpFormRhf>
    </div>
  );
}

export default App;
