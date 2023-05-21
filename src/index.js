import ReactDOM from 'react-dom/client';
//Cấu hình react router dom
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter , Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Login from './pages/Login';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import Home from './pages/Home';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import UseCallBackDemo from './pages/Hooks/UseCallback/UseCallBackDemo';
import UseMemoDemo from './pages/Hooks/UseMemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
//Cấu hình redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore';
import DemoAppChat from './pages/Hooks/ReduxHook/DemoAppChat';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Register from './pages/Register';
import Movie from './pages/Movie';
import {createBrowserHistory} from 'history';
//Cài đặt antd
import './index.css'
import 'antd/dist/reset.css';
import DemoAntd from './pages/DemoAntd';
import DemoHOC from './pages/DemoHOC';
import ContainerModal from './HOC/ContainerModal';
import ResponsiveTemplate from './templates/ResponsiveTemplate';
import HomeMobile from './pages/HomeMobile';


//tạo ra 1 history tương tự useNavigate
export const history = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />} >
          <Route index element={<ResponsiveTemplate component={Home} mobileComponent={HomeMobile} />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="demo-chat" element={<DemoAppChat />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="antd" element={<DemoAntd />}></Route>
          <Route path="hoc" element={<DemoHOC />}></Route>

          <Route path="detail" >
              <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='search' element={<Search />} />
          <Route path='movie' element={<Movie />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
      <ContainerModal />
    </HistoryRouter>
  </Provider>

);

