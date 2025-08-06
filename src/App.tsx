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

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header Navigation */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tour-du-lich" element={<TourDuLichPage />} />
          <Route path="/khach-san" element={<KhachSanPage />} />
          <Route path="/so-tay-du-lich" element={<SoTayDuLichPage />} />
          <Route path="/gioi-thieu-du-lich" element={<GioiThieuPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
