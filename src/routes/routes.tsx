import { Route, Routes } from "react-router-dom";
import { CarService } from "../Components/AboutCars/CarService/CarService";
import { FeauturedCars } from "../Components/AboutCars/FeauturedCars/FeauturedCars";
import { NewestCars } from "../Components/AboutCars/NewestCars/NewestCars";
import { HomePage } from "../Components/HomePage/HomePage";
import { ClientsComment } from "../Components/AboutCars/ClientsComment/ClientsComment";
import { CarBrands } from "../Components/AboutCars/CarBrands/CarBrands";
import { Footer } from "../Components/Footer/Footer";
import { SearchModel } from "../Components/AboutCars/SearchModel/SearchModel";
import { LoginPage } from "../Components/HomePage/LoginPage/LoginPage";
import { SignupPage } from "../Components/HomePage/SignupPage/SignupPage";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/search-model" element={<SearchModel />} />
    <Route path="/car-service" element={<CarService />} />
    <Route path="/newest-cars" element={<NewestCars />} />
    <Route path="/feautured-cars" element={<FeauturedCars />} />
    <Route path="/clients-comment" element={<ClientsComment />} />
    <Route path="/car-brands" element={<CarBrands />} />
    <Route path="car-brands" element={<CarBrands />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="about" element={<Footer />} />
    <Route path="sign-up" element={<SignupPage />} />
  </Routes>
);
