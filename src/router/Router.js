import Root from "../layout/Root";
import GtrForm from "../pages/form/GtrForm";

const { createBrowserRouter } = require("react-router-dom");
const { default: Success } = require("../components/shared/success/Success");
const { default: Fail } = require("../components/shared/success/Fail");

const router = createBrowserRouter([
    {
        path: "/", element: <Root />, children: [
            { path: '/', element: <GtrForm /> },
            {
                path: "/success", element: <Success />
            },

            {
                path: "/fail", element: <Fail />
            }
        ]
    },

])

export default router