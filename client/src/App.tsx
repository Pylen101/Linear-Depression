import { Route, Routes } from "react-router-dom";
import { URLModal } from "react-url-modal";

import { Navbar } from "@internals/components";
import { CountryContext, UserContext } from "@internals/contexts";
import { useGetLocalizationData, useGetUserType } from "@internals/hooks";
import { AddCourse, AddLesson, AddPromotion, AddReview } from "@internals/modals";
import { CorporateTrainee, Course, ForgotPassword, Home, IndividualTrainee, Login, MyCourses, PasswordReset } from "@internals/pages";

function App() {
    const { country, setCountry, currency, setCurrency } = useGetLocalizationData();
    const { userType, setUserType } = useGetUserType();

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            <CountryContext.Provider value={{ country, setCountry, currency, setCurrency }}>
                <div className="App">
                    <URLModal
                        modals={{
                            addLesson: AddLesson,
                            addCourse: AddCourse,
                            addReview: AddReview,
                            addPromotion: AddPromotion
                        }}
                    />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="course/:courseId" element={<Course />} />
                        <Route path="corporate-trainee" element={<CorporateTrainee />} />
                        <Route path="individual-trainee" element={<IndividualTrainee />} />

                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/reset" element={<PasswordReset />} />
                        <Route path="/auth/forgot" element={<ForgotPassword />} />
                        
                        <Route path="login" element={<Login />} />
                        <Route path="me/courses" element={<MyCourses />} />
                    </Routes>
                </div>
            </CountryContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
