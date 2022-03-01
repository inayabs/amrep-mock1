import *  as heroIcons from '@heroicons/react/outline'

export const navLinks = {
    guest: [
        {   
            name:'Services',
            subNav:[
                {
                    name: 'Photo Editing',
                    description: 'See prices of photo editing.',
                    href: '/services/photo-editing',
                    icon: heroIcons['PhotographIcon'],
                  },
                  {
                    name: 'Video Editing',
                    description: 'See prices of video editing.',
                    href: '/services/video-editing',
                    icon: heroIcons['VideoCameraIcon'],
                  },
                  {
                    name: 'Twilight Editing',
                    description: "See prices of twilight editing.",
                    href: '/services/twilight-editing',
                    icon: heroIcons['VideoCameraIcon'],
                  },
            ]
        },
        {
            name: 'Company',
            subNav: [
                {
                    name: 'About Us',
                    description: "About the Company.",
                    href: '/company/about-us',
                    icon: heroIcons['UserGroupIcon'],
                },
                {
                    name: 'Our Team',
                    description: "Meet the Team.",
                    href: '/company/our-team',
                    icon: heroIcons['UserGroupIcon'],
                },
                {
                    name: 'Contact',
                    description: "Contact Us",
                    href: '/company/contact',
                    icon: heroIcons['MailIcon'],
                },
            ]
        },
        {
            name: 'Showcase',
            href: '/showcase'
        },
        {
            name: 'Packages',
            description: "See Packages",
            href: '/packages'
        }
    ],
    user:{

    }
}
 