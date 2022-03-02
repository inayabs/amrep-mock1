import Layout from "../../components/layouts/landing";
import ImageSlider from "../../components/image-slider";

const files = [
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
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
                <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} key={file.id}>
                        <ImageSlider file={file}/>
                    </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
 
export default TwilightEditing;