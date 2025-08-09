import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Header, Footer } from "./components";

// Pages
import {
  HomePage,
  TourDuLichPage,
  KhachSanPage,
  SoTayDuLichPage,
  GioiThieuPage,
} from "./pages";

/**
 * Main App component - Root component of the travel application
 *
 * Features:
 * - React Router setup for navigation
 * - Global layout with header and footer
 * - Route definitions for all pages
 * - Professional structure for travel website
 */
function App() {
  return (
    <Router>
      <div className="app" data-testid="app-container">
        {/* Header Navigation */}
        <Header />

        {/* Routes */}
        <main data-testid="app-main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tour-du-lich" element={<TourDuLichPage />} />
            <Route path="/khach-san" element={<KhachSanPage />} />
            <Route path="/so-tay-du-lich" element={<SoTayDuLichPage />} />
            <Route path="/gioi-thieu-du-lich" element={<GioiThieuPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
