import { Route, Routes } from 'react-router';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import ScrollToTop from "./components/common/ScrollTop";
import Home from './pages/home/home-1/page';
import JobList from "./pages/job-list/job-list-v6/page.jsx";
import JobSingleDynamicV1 from './pages/job-single/job-single-v1/page.jsx';
import EmployersList from "./pages/employers-list/employers-list-v3/page.jsx";
import About from "./pages/others/about/page.jsx";
import Contact from "./pages/others/contact/page.jsx";
import Notfound from './pages/others/404/page.jsx';
import EmployersSingleV1 from './components/employer-single-pages';
import LogIn from './pages/others/login/page.jsx';
import RegisterForm from './pages/others/register/page.jsx';
import DashboadHome from './pages/employers-dashboard/dashboard/page.jsx';
import CompanyProfile from './pages/employers-dashboard/company-profile/page.jsx';
import PostJob from './pages/employers-dashboard/post-jobs/page.jsx';
import ManageJobs from './pages/employers-dashboard/manage-jobs/page.jsx';
import AllApplicants from './pages/employers-dashboard/all-applicants/page.jsx';
import ShortlistedResumes from './pages/employers-dashboard/shortlisted-resumes/page.jsx';
import CandidateSingleDynamicV1 from './pages/candidates-single/candidates-single-v1/page.jsx';
import Packages from './pages/employers-dashboard/packages/page.jsx';
import Messages from './pages/employers-dashboard/messages/page.jsx';
import Pricing from './pages/others/pricing/page.jsx';
import Terms from './pages/others/terms/page.jsx';
import ChangePassword from './pages/employers-dashboard/change-password/page.jsx';
import MyTasks from './pages/employers-dashboard/my-tasks/page.jsx';
import CreateTask from './pages/employers-dashboard/create-task/page.jsx';
import TaskResults from './pages/employers-dashboard/task-results/page.jsx';
import ApplicantDashboard from './pages/candidates-dashboard/dashboard/page.jsx';
import MyProfile from './pages/candidates-dashboard/my-profile/page.jsx';
import MyResume from './pages/candidates-dashboard/my-resume/page.jsx';
import AppliedJobs from './pages/candidates-dashboard/applied-jobs/page.jsx';
import MyTasksCandidate from './pages/candidates-dashboard/my-tasks/page.jsx';
import SolveTasks from './pages/candidates-dashboard/solve-tasks/page.jsx';
import JobAlerts from './pages/candidates-dashboard/job-alerts/page.jsx';
import ShortListedJobs from './pages/candidates-dashboard/short-listed-jobs/page.jsx';
import MessagesCandidates from './pages/candidates-dashboard/messages/page.jsx';
import ChangePasswordCandidate from './pages/candidates-dashboard/change-password/page.jsx';
import Loading from './components/common/Loading/Loading.jsx';
//Protected
import PrivateRoutes from './routes/PrivateRoutes.js';
import PublicRoutes from './routes/PublicRoutes.js';
//HOOKS
import useDataFetching from './hooks/dataFetching.js';

function App() {
  console.log(new Date())
  const dispatch = useDispatch();
  const { info } = useSelector(state => state.candidate);
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const { alljobs } = useSelector(state => state.job);
  const { loading } = useSelector(state => state.loading);

  // useEffect for Aos initialization
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);
  useDataFetching();
  return (
    <div className="page-wrapper">
      <Loading show={loading} />

      {/* _____________________ Routers _______________________ */}
      <Routes>
        <Route path='/' element={<Home numjob={alljobs?.length} />}/>
        <Route path='/vacancies-list' element={<JobList />}/>
        <Route path='/vacancies-list/:id' element={<JobSingleDynamicV1 />}/>
        <Route path='/companies-list' element={<EmployersList />}/>
        <Route path='/companies-list/:id' element={<EmployersSingleV1 />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/subscriptions' element={<Pricing />}/>
        <Route path='/terms' element={<Terms />}/>
        <Route path='*' element={<Notfound />} />
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<RegisterForm />} />
        </Route>    
        <Route element={<PrivateRoutes />}>
          { user?.u_t_p ==='c_m_p' && (
              <>
                <Route path='/company-dashboard/dashboard' element={<DashboadHome />} />
                <Route path='/company-dashboard/company-profile' element={<CompanyProfile />} />
                <Route path='/company-dashboard/post-vacancy' element={<PostJob />} />
                <Route path='/company-dashboard/manage-vacancies' element={<ManageJobs />} />
                <Route path='/company-dashboard/all-applicants' element={<AllApplicants />} />
                <Route path='/company-dashboard/chosen-applicants' element={<ShortlistedResumes />} />
                <Route path='/company-dashboard/my-tasks' element={<MyTasks />} />
                <Route path='/company-dashboard/task-results' element={<TaskResults />} />
                <Route path='/company-dashboard/create-task' element={<CreateTask />} />
                <Route path='/company-dashboard/subscriptions' element={<Packages />} />
                <Route path='/company-dashboard/messages' element={<Messages />} />
                <Route path='/company-dashboard/change-password' element={<ChangePassword />} />
                <Route path='/company-dashboard/applicant/:id' element={<CandidateSingleDynamicV1 />}/>
              </>
                )}
              {/* candidate dashboard pages */}
              {user?.u_t_p === 'u_s_r' && (
              <>
                <Route path='/applicants-dashboard/dashboard' element={<ApplicantDashboard />} />
                <Route path='/applicants-dashboard/my-profile' element={<MyProfile />} />
                <Route path='/applicants-dashboard/my-resume' element={<MyResume />} />
                <Route path='/applicants-dashboard/applies' element={<AppliedJobs />} />
                <Route path='/applicants-dashboard/my-tasks' element={<MyTasksCandidate />} />
                <Route path='/applicants-dashboard/solve-tasks/:applyId/:taskId' element={<SolveTasks />} />
                <Route path='/applicants-dashboard/feedbacks' element={<JobAlerts />} />
                <Route path='/applicants-dashboard/saved-vacancies' element={<ShortListedJobs />} />
                <Route path='/applicants-dashboard/messages' element={<MessagesCandidates />} />
                <Route path='/applicants-dashboard/change-password' element={<ChangePasswordCandidate />} />
              </>
              )
          }
        </Route>

      </Routes>

      {/* Toast notification container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* scroll top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
