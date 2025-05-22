import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Mascot from "./Mascot.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Header3D from "./Header3D.jsx";
import ProductGrid from "./ProductGrid.jsx";
import ViewerPage from "./ViewerPage";

function Layout({ children }) {
  const location = useLocation();

  const isViewerPage = location.pathname.startsWith("/viewer");

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {!isViewerPage && (
        <>
          <header>
            <Header3D />
          </header>
          <section>
            <Mascot />
          </section>
        </>
      )}
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page: Only render the product grid. Mascot comes from the Layout */}
          <Route path="/" element={<ProductGrid />} />

          {/* Viewer Page: Will render only the ViewerPage (without 3D header or Mascot) */}
          <Route path="/viewer/:productId" element={<ViewerPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;