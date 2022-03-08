import Layout from "../../components/layouts/landing";
import ImageSlider from "../../components/image-slider";

const files = [
    {
        id:1,
        imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/61c699347d5f9448ada0f031/1640405301356/before+twilight.jpg',
        imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/61c6993904177b70b0321f96/1640405306316/virtual+twilight+photo.jpg'
      },
    // More files...
  ]

const TwilightEditing = () => {
    return (
        <Layout>
            <div className="text-center">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-7xl pb-5" >
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Virtual Twilight - $5 each</h2>
                    <p className="text-xl text-gray-500">
                    The easiest way for a listing to stand out in the sea of property photos is a Virtual Twilight conversion. With Virtual Twilight, the awesome look of Twilight Photography is imagined from a regular daytime photo, saving copious amounts of time and expense. Enjoy the benefits of Virtual Twilight for only $5 per photo converted.
                    </p>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.id}>
                        <ImageSlider file={file}/>
                    </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
 
export default TwilightEditing;