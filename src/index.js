import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Alert from "./Alert";
import BtnGroup from "./BtnGroup";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import DefinitionsList from "./DefinitionsList";
import ListGroup from "./ListGroup";
import Progress from "./Progress";
import Carousel from "./Carousel";
import Collapse from "./Collapse";
import MyForm from "./MyForm";
import Component from "./Component";
import TodoBox from "./TodoBox";
import Card4 from "./Card4";

import AppSwitch from "./ThemeSwitcher/AppSwitch";
import "./ThemeSwitcher/style.css"

import ModalWin from "./ModalWin";
import Autocomplete from "./Autocomplete";
import MarkdownEditor from "./MarkdownEditor";
import '@toast-ui/editor/dist/toastui-editor.css';
import TodoBox2 from "./TodoBox2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='container-fluid'>
          <div className='row mb-3'>
              <div className='col-1'>
                  <Alert type={'warn'} text={'test alert warn'}/>
              </div>
              <div className='col-1'>
                  <BtnGroup />
              </div>
              <div className='col-2'>
                  <Card />
              </div>
              <div className='col-1'>
                  <Card2 title={'Test Title'} text={'Test Text'}/>
              </div>
              <div className='col-1'>
                  <Card3 text={'some text'}/>
              </div>
              <div className='col-1'>
                  <DefinitionsList data={[
                      {dt: 'термин 1', dd: 'определение 1', id:1},
                      {dt: 'термин 2', dd: 'определение 2', id:2},
                  ]} />
              </div>
              <div className='col-1'>
                  <ListGroup>
                      <p>элемент 1</p>
                      <p>элемент 2</p>
                  </ListGroup>
              </div>
              <div className='col-1'>
                  <Progress percentage={40}/>
              </div>
              <div className="col-1">
                  <Collapse text={'collapse me'} opened={false} />
                  <Collapse text={'collapse me2'} />
              </div>
              <div className="col-1">
                  <ModalWin />
              </div>
              <div className="col-1">
                  <Autocomplete />
              </div>
          </div>
          <div className="row mb-3">
              <div className="col-1">
                  <Component />
              </div>
              <div className="col-2">
                  <TodoBox />
              </div>
              <div className="col-2">
                  <TodoBox2 />
              </div>
              <div className="col-1">
                  <Card4>
                      <Card4.Body>
                          <Card4.Title>
                              test
                          </Card4.Title>
                          <Card4.Text>
                              qweasdzxc
                          </Card4.Text>
                      </Card4.Body>
                  </Card4>
              </div>
              <div className="col-2">
                  <AppSwitch />
              </div>
          </div>
          <div className="row mb-3">
              <div className="col-1">

              </div>
          </div>
          <div className="row mb-3">
              <div className="col-2">
                  <MyForm />
              </div>
              <div className="col-2">
                  <Carousel images={[
                      '/images/third.jpg',
                      '/images/first.jpg',
                      '/images/second.jpg',
                  ]} />
              </div>
              <div className="col-7">
                  <MarkdownEditor onContentChange={console.log}/>
              </div>
          </div>
      </div>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
