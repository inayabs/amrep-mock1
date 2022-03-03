import Layout from "../../components/layouts/landing";
import ReactPlayer from "react-player";

const files = [
    {
        id:1,
        title: 'Standard “Walkthrough” Edit - $5',
        size: '3.9 MB',
        source:
          'https://player.vimeo.com/video/641919142?h=d7ea6014f7&app_id=122963',
      },
      {
        id:2,
        title: 'Advanced “Cinematic” Edit - $50',
        size: '3.9 MB',
        source:
          'https://player.vimeo.com/video/537325941?h=d1c4854e66&app_id=122963',
      },
      {
        id:3,
        title: 'Highlight Reel Edit - $25',
        size: '3.9 MB',
        source:
          'https://player.vimeo.com/video/537317894?h=712e02bd53&app_id=122963',
      },
    // More files...
  ]
const VideoEditing = () => {
    return (
        <Layout>
            <div className="text-center">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-7xl pb-5 " >
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Video Editing - Starting at $5</h2>
                    <p className="text-xl text-gray-500">
                    With Video Edits starting at just $5, you are sure to be thrilled with our work. 

                    Due to the wildly variable nature of Real Estate Video, our Video Editing team needs a chance to get to know your style.  
                    </p>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.id} className="relative">
                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
                        {/* <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"> */}
                            <ReactPlayer url={file.source} width={'relative'} controls/>
                        {/* </div> */}
                        {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
 
export default VideoEditing;