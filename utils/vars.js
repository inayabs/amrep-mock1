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
                    icon: 'ChartBarIcon',
                  },
                  {
                    name: 'Video Editing',
                    description: 'See prices of video editing.',
                    href: '/services/video-editing',
                    icon: 'CursorClickIcon',
                  },
                  {
                    name: 'Twilight Editing',
                    description: "See prices of twilight editing.",
                    href: '/services/twilight-editing',
                    icon: heroIcons['ViewGridIcon'],
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
                    icon: heroIcons['ViewGridIcon'],
                },
                {
                    name: 'Our Team',
                    description: "Meet the Team.",
                    href: '/company/our-team',
                    icon: 'ViewGridIcon',
                },
                {
                    name: 'Contact',
                    description: "Contact Us",
                    href: '/company/contact',
                    icon: heroIcons['ViewGridIcon'],
                },
            ]
        },
        {
            name: 'Showcase',
            href: '/showcase'
        },
        {
            name: 'Booking',
            subNav: [
                {
                    name: 'Packages',
                    description: "See Packages",
                    href: '/booking/packages',
                    icon: heroIcons['ViewGridIcon'],
                },
                {
                    name: 'Free Trial',
                    description: "1 week free trial!",
                    href: '/booking/free-trial',
                    icon: heroIcons['ViewGridIcon'],
                },
            ]
        }
    ],
    user:{

    }
}
 