import Layout from "../components/layouts/landing";
import { Widget } from "@typeform/embed-react";

const FreeTrial = () => {
    return ( 
        <Layout>
            {/* <Header title={title} description={description} /> */}
            <div>
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <Widget id="xp0fgJ5p" style={{ width: '100%', height:'500px;' }} className="my-form" />
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default FreeTrial;